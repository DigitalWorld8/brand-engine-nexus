
import React, { useEffect, useState, useRef } from 'react';
import { ArrowUp } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useNavbarScroll } from '@/hooks/useNavbarScroll';

const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const { isScrolled } = useNavbarScroll();
  const scrollingRef = useRef(false);
  const lastScrollY = useRef(0);
  const scrollCheckRef = useRef<number>();

  useEffect(() => {
    // Optimized scroll handler using requestAnimationFrame
    const checkScroll = () => {
      const scrollY = window.scrollY;
      
      // Only process if scroll position actually changed significantly
      if (Math.abs(scrollY - lastScrollY.current) > 5) {
        lastScrollY.current = scrollY;
        
        const threshold = window.innerHeight * 0.5;
        const shouldBeVisible = scrollY > threshold;
        
        if (shouldBeVisible !== visible) {
          setVisible(shouldBeVisible);
        }
      }
      
      scrollCheckRef.current = requestAnimationFrame(checkScroll);
    };
    
    // Start the animation loop
    scrollCheckRef.current = requestAnimationFrame(checkScroll);
    
    return () => {
      if (scrollCheckRef.current) {
        cancelAnimationFrame(scrollCheckRef.current);
      }
    };
  }, [visible]);

  const scrollToTop = () => {
    // Prevent multiple scroll attempts
    if (scrollingRef.current) return;
    scrollingRef.current = true;
    
    // Use smooth performant scrolling with RAF
    const startPosition = window.scrollY;
    const startTime = performance.now();
    const duration = Math.min(1000, 500 + startPosition / 2); // Dynamic duration based on scroll position
    
    // Easing function for natural motion
    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
    
    const animateScroll = (timestamp: number) => {
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutCubic(progress);
      
      window.scrollTo(0, startPosition * (1 - easedProgress));
      
      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      } else {
        scrollingRef.current = false;
      }
    };
    
    requestAnimationFrame(animateScroll);
  };

  return (
    <button
      onClick={scrollToTop}
      className={cn(
        'fixed bottom-6 right-6 z-50 p-3 rounded-full shadow-lg',
        'bg-brand-primary text-white',
        'transform-gpu transition-all duration-300 ease-out-expo'
      )}
      style={{
        opacity: visible ? 1 : 0,
        transform: `translate3d(0, ${visible ? 0 : 16}px, 0)`,
        pointerEvents: visible ? 'auto' : 'none'
      }}
      aria-label="Back to top"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
};

export default BackToTop;
