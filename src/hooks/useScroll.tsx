
import { useState, useEffect } from 'react';

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

  useEffect(() => {
    // For a smoother initial load experience
    const updateScrollPosition = () => {
      setScrollState(prevState => {
        const currentScrollY = window.scrollY;
        const direction = currentScrollY > prevState.lastScrollY ? 'down' : 
                        currentScrollY < prevState.lastScrollY ? 'up' : 
                        prevState.direction;
        
        // Mark that initial scroll has occurred if scrolling down
        const initialScrollOccurred = prevState.initialScrollOccurred || 
                                    (direction === 'down' && currentScrollY > 50);
        
        return {
          scrollY: currentScrollY,
          direction,
          lastScrollY: currentScrollY,
          initialScrollOccurred
        };
      });
    };
    
    // Initial check
    updateScrollPosition();
    
    // Optimized scroll listener with request animation frame
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateScrollPosition();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return scrollState;
}
