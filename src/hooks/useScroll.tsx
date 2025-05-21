
import { useState, useEffect, useRef } from 'react';
import { rafThrottle } from '@/lib/utils';

interface ScrollState {
  scrollY: number;
  direction: 'up' | 'down' | null;
  lastScrollY: number;
  initialScrollOccurred: boolean;
}

export function useScroll() {
  const [scrollState, setScrollState] = useState<ScrollState>({
    scrollY: typeof window !== 'undefined' ? window.scrollY : 0,
    direction: null,
    lastScrollY: 0,
    initialScrollOccurred: false
  });
  
  // Use refs to avoid recreating functions on each render
  const scrollRef = useRef({
    lastScrollY: typeof window !== 'undefined' ? window.scrollY : 0,
    initialScrollOccurred: false,
    ticking: false
  });

  useEffect(() => {
    // For a smoother initial load experience
    const updateScrollPosition = () => {
      const currentScrollY = window.scrollY;
      const direction = currentScrollY > scrollRef.current.lastScrollY ? 'down' : 
                     currentScrollY < scrollRef.current.lastScrollY ? 'up' : 
                     scrollState.direction;
      
      // Mark that initial scroll has occurred if scrolling down
      const initialScrollOccurred = scrollRef.current.initialScrollOccurred || 
                                 (direction === 'down' && currentScrollY > 50);
      
      // Update ref values
      scrollRef.current.lastScrollY = currentScrollY;
      scrollRef.current.initialScrollOccurred = initialScrollOccurred;
      
      // Only update state if values have changed
      setScrollState({
        scrollY: currentScrollY,
        direction,
        lastScrollY: currentScrollY,
        initialScrollOccurred
      });
      
      scrollRef.current.ticking = false;
    };
    
    // Initial check
    updateScrollPosition();
    
    // Optimized scroll listener with request animation frame and throttling
    const handleScroll = rafThrottle(() => {
      if (!scrollRef.current.ticking) {
        requestAnimationFrame(() => {
          updateScrollPosition();
        });
        scrollRef.current.ticking = true;
      }
    });

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return scrollState;
}
