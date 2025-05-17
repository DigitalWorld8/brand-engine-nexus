
import { useState, useRef, useEffect, useCallback } from 'react';
import { useScroll } from './useScroll';

export function useSideEdgeAnimation() {
  const [sideEdgeState, setSideEdgeState] = useState('full'); // 'full', 'medium', 'small', 'minimal'
  const [isAnimating, setIsAnimating] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const lastScrollY = useRef(0);
  const animationTimeoutRef = useRef<number | null>(null);
  const { direction, initialScrollOccurred } = useScroll();
  
  // Enhanced smooth scroll handler for Apple-like animations
  const smoothScrollHandler = useCallback((callback: () => void) => {
    let waiting = false;
    const throttleMs = 0; // Ultra-low value for smoother animations (reduced from 3ms to 0)
    
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
    // Set scrolling up state
    setIsScrollingUp(direction === 'up' && initialScrollOccurred);
    
    // Handle progressive side edge narrowing with ultra-responsive Apple-like changes
    const handleScrollForSideEdges = smoothScrollHandler(() => {
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
      
      // Using Apple-like responsive thresholds with smoother graduation
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
        }, 200); // Reduced from 400ms to 200ms for faster transitions
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
  }, [smoothScrollHandler, sideEdgeState, isAnimating, direction, initialScrollOccurred]);

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
