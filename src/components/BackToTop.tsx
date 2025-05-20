
import React, { useEffect, useState, useRef } from 'react';
import { ArrowUp } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useNavbarScroll } from '@/hooks/useNavbarScroll';

const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const { isScrolled } = useNavbarScroll();
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    // Show button when user scrolls past the fold
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const threshold = window.innerHeight * 0.5; // Show after scrolling 50% of viewport
          
          // Only update state if visibility changes to avoid unnecessary re-renders
          const shouldBeVisible = scrollY > threshold;
          if (shouldBeVisible !== visible) {
            setVisible(shouldBeVisible);
          }
          
          lastScrollY.current = scrollY;
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [visible]);

  const scrollToTop = () => {
    // Use smooth scroll behavior with cubic-bezier easing
    const duration = 300; // ms
    const startingY = window.pageYOffset;
    let start: number | null = null;
    
    // Easing function: easeInOutCubic
    const easeInOutCubic = (t: number): number => 
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    
    // Animation function for smooth scroll with custom easing
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const time = Math.min(1, progress / duration);
      
      window.scrollTo(0, startingY * (1 - easeInOutCubic(time)));
      
      if (progress < duration) {
        window.requestAnimationFrame(step);
      }
    };
    
    // Start the animation
    window.requestAnimationFrame(step);
  };

  return (
    <button
      onClick={scrollToTop}
      className={cn(
        'fixed bottom-6 right-6 z-50 p-3 rounded-full shadow-lg',
        'bg-brand-primary text-white',
        'transform transition-all duration-300 ease-out-expo',
        'flex items-center justify-center',
        'hover:bg-brand-primary/90 hover:shadow-xl hover:scale-105',
        visible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
      )}
      aria-label="Back to top"
      style={{
        willChange: 'transform, opacity',
        backfaceVisibility: 'hidden',
        perspective: '1000px',
        transform: visible ? 'translateY(0) translateZ(0)' : 'translateY(16px) translateZ(0)'
      }}
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
};

export default BackToTop;
