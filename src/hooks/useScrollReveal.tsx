
import { useEffect, useRef, useState } from "react";
import { useScroll } from "./useScroll";

interface ScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
}

export function useScrollReveal({ threshold = 0.1, rootMargin = "0px" }: ScrollRevealOptions = {}) {
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
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (ref.current) {
            observer.unobserve(ref.current);
          }
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

  return { ref, isVisible, isScrollingUp };
}

export default useScrollReveal;
