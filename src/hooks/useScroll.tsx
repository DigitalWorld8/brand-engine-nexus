
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
  
  const ticking = useRef(false);
  const lastScrollY = useRef(typeof window !== 'undefined' ? window.scrollY : 0);
  const initialScrollOccurredRef = useRef(false);
  const directionRef = useRef<'up' | 'down' | null>(null);

  useEffect(() => {
    // For a smoother initial load experience
    const updateScrollPosition = () => {
      if (ticking.current) return;
      
      ticking.current = true;
      
      requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;
        const direction = currentScrollY > lastScrollY.current ? 'down' : 
                        currentScrollY < lastScrollY.current ? 'up' : 
                        directionRef.current;
        
        // Mark that initial scroll has occurred if scrolling down
        if (!initialScrollOccurredRef.current && direction === 'down' && currentScrollY > 50) {
          initialScrollOccurredRef.current = true;
        }
        
        // Only update state if something has changed
        if (
          currentScrollY !== scrollState.scrollY || 
          direction !== directionRef.current ||
          initialScrollOccurredRef.current !== scrollState.initialScrollOccurred
        ) {
          setScrollState({
            scrollY: currentScrollY,
            direction,
            lastScrollY: currentScrollY,
            initialScrollOccurred: initialScrollOccurredRef.current
          });
          
          // Update refs
          directionRef.current = direction;
        }
        
        lastScrollY.current = currentScrollY;
        ticking.current = false;
      });
    };
    
    // Initial check
    updateScrollPosition();
    
    // Create passive event listener
    window.addEventListener('scroll', updateScrollPosition, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', updateScrollPosition);
    };
  }, [scrollState.scrollY, scrollState.initialScrollOccurred]);

  return scrollState;
}
