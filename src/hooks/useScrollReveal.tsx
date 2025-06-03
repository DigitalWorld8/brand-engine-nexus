
import { useEffect, useRef, useState } from "react";
import { useScroll } from "./useScroll";
import { debounce } from "@/lib/utils";

interface ScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  delay?: number;
}

export function useScrollReveal({ 
  threshold = 0.1, 
  rootMargin = "0px",
  delay = 0
}: ScrollRevealOptions = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const { direction, initialScrollOccurred } = useScroll();
  
  // Check if scrolling up after initial scroll down
  const isScrollingUp = direction === 'up' && initialScrollOccurred;

  useEffect(() => {
    // If scrolling up after scrolling down, instantly show all elements
    if (isScrollingUp && !isVisible) {
      setIsVisible(true);
      return;
    }
    
    // Performance optimized - create observer once and only when needed
    let observer: IntersectionObserver | null = null;
    let timeoutId: number | null = null;
    
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      
      if (entry.isIntersecting) {
        // Use setTimeout for delayed reveal if needed
        if (delay > 0) {
          timeoutId = window.setTimeout(() => {
            setIsVisible(true);
          }, delay);
        } else {
          setIsVisible(true);
        }
        
        // Disconnect after visibility is set to true for performance
        if (ref.current && observer) {
          observer.unobserve(ref.current);
        }
      }
    };
    
    // Debounced observer creation for better performance during rapid scrolling
    const createObserver = debounce(() => {
      observer = new IntersectionObserver(handleIntersection, {
        threshold,
        rootMargin,
      });
      
      const currentRef = ref.current;
      if (currentRef) {
        observer.observe(currentRef);
      }
    }, 100);
    
    createObserver();
    
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      
      if (observer) {
        observer.disconnect();
      }
    };
  }, [threshold, rootMargin, isScrollingUp, delay]);

  return { ref, isVisible, isScrollingUp };
}

export default useScrollReveal;
