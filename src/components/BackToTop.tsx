
import React, { useEffect, useState, useCallback, useRef } from 'react';
import { ArrowUp } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useNavbarScroll } from '@/hooks/useNavbarScroll';

const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const { isScrolled } = useNavbarScroll();
  const scrollingRef = useRef<ReturnType<typeof setTimeout>>();

  // Optimized scroll handler with throttling
  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    const threshold = window.innerHeight * 0.4; // Show after scrolling 40% of viewport height
    setVisible(scrollY > threshold);
  }, []);

  useEffect(() => {
    const throttledScroll = () => {
      if (!scrollingRef.current) {
        scrollingRef.current = setTimeout(() => {
          handleScroll();
          scrollingRef.current = undefined;
        }, 100);
      }
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', throttledScroll);
      if (scrollingRef.current) clearTimeout(scrollingRef.current);
    };
  }, [handleScroll]);

  const scrollToTop = useCallback(() => {
    if (isScrolling) return;
    setIsScrolling(true);

    // High performance scroll animation
    const startPosition = window.scrollY;
    const startTime = performance.now();
    const duration = 500;
    
    // Easing function for smooth animation
    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
    
    const animateScroll = (timestamp: number) => {
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutCubic(progress);
      
      window.scrollTo(0, startPosition * (1 - eased));
      
      if (progress < 1) {
        window.requestAnimationFrame(animateScroll);
      } else {
        setIsScrolling(false);
      }
    };
    
    window.requestAnimationFrame(animateScroll);
  }, [isScrolling]);

  return (
    <button
      onClick={scrollToTop}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      disabled={isScrolling}
      className={cn(
        'fixed bottom-6 right-6 z-50 p-3 rounded-full shadow-lg',
        'bg-brand-primary text-white',
        'transform-gpu transition-all duration-200 ease-out-expo',
        'flex items-center justify-center',
        'hover:bg-brand-primary/90 hover:shadow-xl focus:outline-none',
        isHovered ? 'scale-110' : 'scale-100',
        visible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
      )}
      aria-label="Back to top"
      style={{
        willChange: 'transform, opacity',
        backfaceVisibility: 'hidden'
      }}
    >
      <ArrowUp 
        className={cn(
          "w-5 h-5 transition-transform duration-200",
          isHovered ? '-translate-y-0.5' : 'translate-y-0'
        )}
      />
    </button>
  );
};

export default BackToTop;
