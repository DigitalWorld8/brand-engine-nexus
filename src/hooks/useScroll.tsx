
import { useState, useEffect, useRef } from 'react';

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
    ticking: false,
    prevScrollY: 0
  });

  useEffect(() => {
    // For a smoother initial load experience
    const updateScrollPosition = () => {
      const currentScrollY = window.scrollY;
      
      // Skip tiny scroll updates to prevent jank
      if (Math.abs(currentScrollY - scrollRef.current.prevScrollY) < 1) {
        scrollRef.current.ticking = false;
        return;
      }
      
      scrollRef.current.prevScrollY = currentScrollY;
      
      const direction = currentScrollY > scrollRef.current.lastScrollY ? 'down' : 
                      currentScrollY < scrollRef.current.lastScrollY ? 'up' : 
                      scrollState.direction;
      
      // Mark that initial scroll has occurred if scrolling down
      const initialScrollOccurred = scrollRef.current.initialScrollOccurred || 
                                 (direction === 'down' && currentScrollY > 50);
      
      // Update ref values
      scrollRef.current.lastScrollY = currentScrollY;
      scrollRef.current.initialScrollOccurred = initialScrollOccurred;
      
      // Update state with the new values
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
    
    // Optimized scroll listener with requestAnimationFrame
    const handleScroll = () => {
      if (!scrollRef.current.ticking) {
        requestAnimationFrame(updateScrollPosition);
        scrollRef.current.ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return scrollState;
}
