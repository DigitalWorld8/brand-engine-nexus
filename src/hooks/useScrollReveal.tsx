import { useEffect, useRef, useState } from "react";
import { useScroll } from "./useScroll";

interface ScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  delay?: number;
  animationType?: 'fade-up' | 'slide-left' | 'slide-right' | 'bounce-in';
}

export function useScrollReveal({ 
  threshold = 0.15, 
  rootMargin = "0px 0px -50px 0px",
  delay = 0,
  animationType = 'fade-up'
}: ScrollRevealOptions = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const { direction, initialScrollOccurred } = useScroll();
  
  const isScrollingUp = direction === 'up' && initialScrollOccurred;

  useEffect(() => {
    // If scrolling up after initial scroll down, instantly show elements
    if (isScrollingUp && !isVisible) {
      setIsVisible(true);
      return;
    }
    
    let observer: IntersectionObserver | null = null;
    let timeoutId: number | null = null;
    
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      
      if (entry.isIntersecting) {
        if (delay > 0) {
          timeoutId = window.setTimeout(() => {
            setIsVisible(true);
          }, delay);
        } else {
          requestAnimationFrame(() => {
            setIsVisible(true);
          });
        }
        
        // Keep observing for better scroll experience
        // Don't disconnect immediately to allow re-triggering if needed
      }
    };
    
    // Enhanced observer with better performance settings
    const createObserver = () => {
      observer = new IntersectionObserver(handleIntersection, {
        threshold: Array.from({ length: 11 }, (_, i) => i * 0.1), // Multiple thresholds for smoother animation
        rootMargin,
      });
      
      const currentRef = ref.current;
      if (currentRef) {
        observer.observe(currentRef);
      }
    };
    
    // Use requestIdleCallback if available for better performance
    if ('requestIdleCallback' in window) {
      (window as any).requestIdleCallback(createObserver, { timeout: 100 });
    } else {
      setTimeout(createObserver, 0);
    }
    
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      
      if (observer) {
        observer.disconnect();
      }
    };
  }, [threshold, rootMargin, isScrollingUp, delay]);

  // Get animation class based on type
  const getAnimationClass = () => {
    const baseClass = animationType;
    return isVisible ? `${baseClass} active` : baseClass;
  };

  return { 
    ref, 
    isVisible, 
    isScrollingUp,
    animationClass: getAnimationClass()
  };
}

export default useScrollReveal;
