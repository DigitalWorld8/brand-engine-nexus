
import { useState, useRef, useEffect, useCallback } from 'react';
import { useScroll } from './useScroll';

export function useSideEdgeAnimation() {
  const [sideEdgeState, setSideEdgeState] = useState('full'); // 'full', 'medium', 'small', 'minimal'
  const [isAnimating, setIsAnimating] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const lastScrollY = useRef(0);
  const animationTimeoutRef = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);
  const { direction, initialScrollOccurred } = useScroll();

  useEffect(() => {
    // Set scrolling up state
    setIsScrollingUp(direction === 'up' && initialScrollOccurred);
    
    // Handle progressive side edge narrowing with ultra-responsive changes
    const handleScrollForSideEdges = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const scrollDirection = scrollY > lastScrollY.current ? 'down' : 'up';
      
      // Only process if scroll position actually changed
      if (Math.abs(scrollY - lastScrollY.current) > 5) {
        lastScrollY.current = scrollY;
        
        // Skip animations when scrolling up after initial scroll down
        if (scrollDirection === 'up' && initialScrollOccurred && scrollY < 100) {
          setSideEdgeState('full');
          setIsAnimating(false);
          return;
        }
        
        // Using responsive thresholds with smoother graduation
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
          setIsAnimating(true);
          setSideEdgeState(newState);
          
          // Allow next animation after current one completes with minimal lag
          if (animationTimeoutRef.current) {
            window.clearTimeout(animationTimeoutRef.current);
          }
          
          animationTimeoutRef.current = window.setTimeout(() => {
            setIsAnimating(false);
          }, 200);
        }
      }
      
      rafRef.current = requestAnimationFrame(handleScrollForSideEdges);
    };
    
    // Initial check and start the animation frame loop
    rafRef.current = requestAnimationFrame(handleScrollForSideEdges);
    
    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      if (animationTimeoutRef.current) {
        window.clearTimeout(animationTimeoutRef.current);
      }
    };
  }, [sideEdgeState, isAnimating, direction, initialScrollOccurred]);

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
