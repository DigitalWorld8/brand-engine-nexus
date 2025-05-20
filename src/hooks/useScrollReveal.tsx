
import { useEffect, useRef, useState } from "react";
import { useScroll } from "./useScroll";

interface ScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export function useScrollReveal({ 
  threshold = 0.1, 
  rootMargin = "0px",
  triggerOnce = true
}: ScrollRevealOptions = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const { direction, initialScrollOccurred } = useScroll();
  const observerRef = useRef<IntersectionObserver | null>(null);
  
  // Check if scrolling up after initial scroll down
  const isScrollingUp = direction === 'up' && initialScrollOccurred;

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    // If scrolling up after scrolling down, instantly show all elements
    if (isScrollingUp && !isVisible) {
      setIsVisible(true);
      return;
    }
    
    // Create observer with performance optimizations
    observerRef.current = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting && !isVisible) {
          requestAnimationFrame(() => {
            setIsVisible(true);
          });
          
          // If configured to trigger only once, disconnect observer after triggering
          if (triggerOnce && currentRef && observerRef.current) {
            observerRef.current.unobserve(currentRef);
          }
        } else if (!entry?.isIntersecting && isVisible && !triggerOnce) {
          requestAnimationFrame(() => {
            setIsVisible(false);
          });
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    if (currentRef) {
      observerRef.current.observe(currentRef);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [threshold, rootMargin, isScrollingUp, triggerOnce, isVisible]);

  return { ref, isVisible, isScrollingUp };
}

export default useScrollReveal;
