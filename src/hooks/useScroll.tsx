
import { useState, useEffect } from 'react';

interface ScrollState {
  scrollY: number;
  direction: 'up' | 'down' | null;
  lastScrollY: number;
}

export function useScroll() {
  const [scrollState, setScrollState] = useState<ScrollState>({
    scrollY: typeof window !== 'undefined' ? window.scrollY : 0,
    direction: null,
    lastScrollY: 0
  });
  const [isReturningVisitor, setIsReturningVisitor] = useState(false);

  useEffect(() => {
    // Check if returning visitor
    const hasSeenAnimations = localStorage.getItem('hasSeenAnimations') === 'true';
    setIsReturningVisitor(hasSeenAnimations);
    
    // For a smoother initial load experience
    const updateScrollPosition = () => {
      setScrollState(prevState => {
        const currentScrollY = window.scrollY;
        const direction = currentScrollY > prevState.lastScrollY ? 'down' : 
                        currentScrollY < prevState.lastScrollY ? 'up' : 
                        prevState.direction;
                        
        return {
          scrollY: currentScrollY,
          direction,
          lastScrollY: currentScrollY
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

    // Use passive listener for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return {
    ...scrollState,
    isReturningVisitor
  };
}
