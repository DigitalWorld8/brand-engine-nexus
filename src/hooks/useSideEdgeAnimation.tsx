
import { useState, useRef, useEffect, useCallback } from 'react';

export function useSideEdgeAnimation() {
  const [sideEdgeState, setSideEdgeState] = useState('full'); // 'full', 'medium', 'small', 'minimal'
  const [isAnimating, setIsAnimating] = useState(false);
  const lastScrollY = useRef(0);
  const animationTimeoutRef = useRef<number | null>(null);
  
  // Enhanced throttled scroll handler with lower delay for faster response
  const throttledScrollHandler = useCallback((callback: () => void) => {
    let waiting = false;
    const throttleMs = 30; // Reduced from 50 to 30 for faster response
    
    return () => {
      if (!waiting) {
        waiting = true;
        window.requestAnimationFrame(() => {
          setTimeout(() => {
            callback();
            waiting = false;
          }, throttleMs);
        });
      }
    };
  }, []);

  useEffect(() => {
    // Handle progressive side edge narrowing with improved responsiveness
    const handleScrollForSideEdges = throttledScrollHandler(() => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const scrollDirection = scrollY > lastScrollY.current ? 'down' : 'up';
      lastScrollY.current = scrollY;
      
      // Lower threshold for more responsive changes
      const significantScrollThreshold = windowHeight * 0.03; // Reduced from 0.05 to 0.03
      const hasSignificantScroll = Math.abs(scrollY - lastScrollY.current) > significantScrollThreshold;
      
      // Don't trigger new animations if one is already in progress
      if (isAnimating) return;

      // Using more responsive thresholds
      let newState = sideEdgeState;
      
      if (scrollY < windowHeight * 0.2) { // Reduced from 0.3 to 0.2
        newState = 'full';
      } else if (scrollY < windowHeight * 0.5) { // Reduced from 0.7 to 0.5
        newState = 'medium';
      } else if (scrollY < windowHeight * 1.0) { // Reduced from 1.4 to 1.0
        newState = 'small';
      } else {
        newState = 'minimal';
      }
      
      if (newState !== sideEdgeState) {
        setIsAnimating(true);
        setSideEdgeState(newState);
        
        // Allow next animation after current one completes with faster transition time
        if (animationTimeoutRef.current) {
          window.clearTimeout(animationTimeoutRef.current);
        }
        
        animationTimeoutRef.current = window.setTimeout(() => {
          setIsAnimating(false);
        }, 500); // Reduced from 800 to 500ms for faster transitions
      }
    });
    
    // Initial check on component mount
    handleScrollForSideEdges();
    
    window.addEventListener('scroll', handleScrollForSideEdges, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScrollForSideEdges);
      if (animationTimeoutRef.current) {
        window.clearTimeout(animationTimeoutRef.current);
      }
    };
  }, [throttledScrollHandler, sideEdgeState, isAnimating]);

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
    getSideEdgeClasses
  };
}
