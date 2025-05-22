
import { useState, useRef, useEffect, useCallback } from 'react';
import { useScroll } from './useScroll';

export function useSideEdgeAnimation() {
  const [sideEdgeState, setSideEdgeState] = useState('full'); // 'full', 'medium', 'small', 'minimal'
  const [isAnimating, setIsAnimating] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const lastScrollY = useRef(0);
  const animationTimeoutRef = useRef<number | null>(null);
  const { direction, initialScrollOccurred } = useScroll();
  
  // Use a low throttle value for smoother animations
  const smoothScrollHandler = useCallback(() => {
    let waiting = false;
    
    return () => {
      if (!waiting) {
        waiting = true;
        requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const windowHeight = window.innerHeight;
          const scrollDirection = scrollY > lastScrollY.current ? 'down' : 'up';
          lastScrollY.current = scrollY;
          
          // Skip animations when scrolling up after initial scroll down
          if (scrollDirection === 'up' && initialScrollOccurred && scrollY < 100) {
            setSideEdgeState('full');
            setIsAnimating(false);
            return;
          }
          
          // Using simpler thresholds with discrete steps
          let newState = sideEdgeState;
          
          if (scrollY < windowHeight * 0.1) {
            newState = 'full';
          } else if (scrollY < windowHeight * 0.3) {
            newState = 'medium';
          } else if (scrollY < windowHeight * 0.6) {
            newState = 'small';
          } else {
            newState = 'minimal';
          }
          
          if (newState !== sideEdgeState) {
            setSideEdgeState(newState);
          }
          
          waiting = false;
        });
      }
    };
  }, [sideEdgeState, initialScrollOccurred]);

  useEffect(() => {
    // Set scrolling up state
    setIsScrollingUp(direction === 'up' && initialScrollOccurred);
    
    const handler = smoothScrollHandler();
    
    // Initial check on component mount
    handler();
    
    window.addEventListener('scroll', handler, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handler);
      if (animationTimeoutRef.current) {
        window.clearTimeout(animationTimeoutRef.current);
      }
    };
  }, [smoothScrollHandler, direction, initialScrollOccurred]);

  // Get side edge classes based on current state with animation class
  const getSideEdgeClasses = () => {
    const baseClasses = 'side-edge side-edge-animated';
    switch (sideEdgeState) {
      case 'full': return `${baseClasses} side-edge-width-full`;
      case 'medium': return `${baseClasses} side-edge-width-medium`;
      case 'small': return `${baseClasses} side-edge-width-small`;
      case 'minimal': return `${baseClasses} side-edge-width-minimal`;
      default: return `${baseClasses} side-edge-width-full`;
    }
  };

  return { 
    sideEdgeState, 
    getSideEdgeClasses,
    isScrollingUp
  };
}
