
import { useEffect, useRef, useState } from "react";

interface ScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  skipIfSeen?: boolean; // New option to skip if animations have been seen
}

export function useScrollReveal({ threshold = 0.1, rootMargin = "0px", skipIfSeen = true }: ScrollRevealOptions = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has seen animations before
    const hasSeenAnimations = localStorage.getItem('hasSeenAnimations') === 'true';
    
    // If skipIfSeen is true and user has seen animations, make visible immediately
    if (skipIfSeen && hasSeenAnimations) {
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
  }, [threshold, rootMargin, skipIfSeen]);

  return { ref, isVisible };
}

export default useScrollReveal;
