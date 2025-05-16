
import { useEffect, useRef, useState } from "react";
import { useScroll } from "./useScroll";

interface ScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade';
  stagger?: boolean;
  duration?: number;
}

export function useScrollReveal({
  threshold = 0.1,
  rootMargin = "0px",
  direction = 'up',
  stagger = false,
  duration,
}: ScrollRevealOptions = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const { direction: scrollDirection, initialScrollOccurred } = useScroll();
  
  // Check if scrolling up after initial scroll down
  const isScrollingUp = scrollDirection === 'up' && initialScrollOccurred;

  useEffect(() => {
    // If scrolling up after scrolling down, instantly show all elements
    if (isScrollingUp && !isVisible) {
      setIsVisible(true);
      return;
    }
    
    // Create intersection observer with enhanced options
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Small delay for more natural staggered appearance
          setTimeout(() => {
            setIsVisible(true);
            if (ref.current) {
              observer.unobserve(ref.current);
            }
          }, 50);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, rootMargin, isScrollingUp]);

  // Construct CSS classes based on options
  const getClasses = () => {
    const classes = ['reveal'];
    
    // Apply hardware acceleration for better performance
    classes.push('hardware-accelerated');
    
    // Apply direction-specific class
    if (direction === 'left') classes.push('reveal-left');
    else if (direction === 'right') classes.push('reveal-right');
    else if (direction === 'fade') classes.push('reveal-fade');
    
    // Apply staggered animation to children
    if (stagger) classes.push('reveal-stagger-children');
    
    // Apply active state if visible
    if (isVisible) classes.push('active');
    
    return classes.join(' ');
  };

  // Custom style with duration if specified
  const getStyle = () => {
    if (duration) {
      return { transition: `all ${duration}s cubic-bezier(0.22, 1, 0.36, 1)` };
    }
    return {};
  };

  return { 
    ref, 
    isVisible, 
    isScrollingUp,
    className: getClasses(),
    style: getStyle(),
  };
}

export default useScrollReveal;
