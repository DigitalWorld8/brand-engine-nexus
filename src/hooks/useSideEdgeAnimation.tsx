
import { useState, useRef, useEffect, useCallback } from 'react';

export function useSideEdgeAnimation() {
  const [sideEdgeState, setSideEdgeState] = useState('full'); // 'full', 'medium', 'small', 'minimal'
  const [isAnimating, setIsAnimating] = useState(false);
  const lastScrollY = useRef(0);
  const animationTimeoutRef = useRef<number | null>(null);
  
  // Enhanced throttled scroll handler with minimal delay for instant response
  const throttledScrollHandler = useCallback((callback: () => void) => {
    let waiting = false;
    const throttleMs = 10; // Reduced to 10ms for even smoother animation (was 16ms)
    
    return () => {
      if (!waiting) {
        waiting = true;
        window.requestAnimationFrame(() => {
          callback();
          setTimeout(() => {
            waiting = false;
          }, throttleMs);
        });
      }
    };
  }, []);

  useEffect(() => {
    // Handle progressive side edge narrowing with ultra-responsive changes
    const handleScrollForSideEdges = throttledScrollHandler(() => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const scrollDirection = scrollY > lastScrollY.current ? 'down' : 'up';
      lastScrollY.current = scrollY;
      
      // Ultra-low threshold for immediate visual feedback
      const significantScrollThreshold = windowHeight * 0.005; // Reduced from 0.01 to 0.005
      const hasSignificantScroll = Math.abs(scrollY - lastScrollY.current) > significantScrollThreshold;
      
      // Using more responsive thresholds with smoother graduation
      let newState = sideEdgeState;
      
      if (scrollY < windowHeight * 0.1) { // Reduced from 0.2 to 0.1
        newState = 'full';
      } else if (scrollY < windowHeight * 0.3) { // Reduced from 0.5 to 0.3
        newState = 'medium';
      } else if (scrollY < windowHeight * 0.6) { // Reduced from 1.0 to 0.6
        newState = 'small';
      } else {
        newState = 'minimal';
      }
      
      if (newState !== sideEdgeState) {
        setIsAnimating(true);
        setSideEdgeState(newState);
        
        // Allow next animation after current one completes with minimal lag
        if (animationTimeoutRef.current) {
          window.clearTimeout(animationTimeoutRef.current);
        }
        
        animationTimeoutRef.current = window.setTimeout(() => {
          setIsAnimating(false);
        }, 200); // Reduced from 350 to 200ms for faster transitions
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
