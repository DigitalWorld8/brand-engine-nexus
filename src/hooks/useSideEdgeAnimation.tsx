
import { useState, useRef, useEffect, useCallback } from 'react';

export function useSideEdgeAnimation() {
  const [sideEdgeState, setSideEdgeState] = useState('full'); // 'full', 'medium', 'small', 'minimal'
  const [isAnimating, setIsAnimating] = useState(false);
  const lastScrollY = useRef(0);
  const animationTimeoutRef = useRef<number | null>(null);
  
  // Enhanced throttled scroll handler with debounce for state changes
  const throttledScrollHandler = useCallback((callback: () => void) => {
    let waiting = false;
    const throttleMs = 50; // Higher value = less frequent updates, smoother animation
    
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
    // Handle progressive side edge narrowing with improved smoothing
    const handleScrollForSideEdges = throttledScrollHandler(() => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const scrollDirection = scrollY > lastScrollY.current ? 'down' : 'up';
      lastScrollY.current = scrollY;
      
      // Only update state if significant scroll has occurred (prevents micro-jitters)
      const significantScrollThreshold = windowHeight * 0.05;
      const hasSignificantScroll = Math.abs(scrollY - lastScrollY.current) > significantScrollThreshold;
      
      // Don't trigger new animations if one is already in progress
      if (isAnimating) return;

      // Using wider thresholds with hysteresis to reduce state changes
      let newState = sideEdgeState;
      
      if (scrollY < windowHeight * 0.3) {
        newState = 'full';
      } else if (scrollY < windowHeight * 0.7) {
        newState = 'medium';
      } else if (scrollY < windowHeight * 1.4) {
        newState = 'small';
      } else {
        newState = 'minimal';
      }
      
      if (newState !== sideEdgeState) {
        setIsAnimating(true);
        setSideEdgeState(newState);
        
        // Allow next animation after current one completes (matches transition time)
        if (animationTimeoutRef.current) {
          window.clearTimeout(animationTimeoutRef.current);
        }
        
        animationTimeoutRef.current = window.setTimeout(() => {
          setIsAnimating(false);
        }, 800);
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
