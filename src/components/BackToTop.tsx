
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
      
      // Only process if scroll position actually changed
      if (scrollY !== lastScrollY.current) {
        lastScrollY.current = scrollY;
        
        const threshold = window.innerHeight * 0.5;
        if (scrollY > threshold && !visible) {
          setVisible(true);
        } else if (scrollY <= threshold && visible) {
          setVisible(false);
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
    
    // Use native smooth scrolling for better performance
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    
    // Reset scrolling flag after animation completes
    const resetScrolling = () => {
      if (window.scrollY <= 10 || Date.now() - startTime > 1500) {
        scrollingRef.current = false;
        window.removeEventListener('scroll', resetScrollingOnScroll);
      } else {
        requestAnimationFrame(resetScrolling);
      }
    };
    
    const startTime = Date.now();
    const resetScrollingOnScroll = () => {
      if (window.scrollY <= 10) {
        scrollingRef.current = false;
        window.removeEventListener('scroll', resetScrollingOnScroll);
      }
    };
    
    window.addEventListener('scroll', resetScrollingOnScroll, { passive: true });
    requestAnimationFrame(resetScrolling);
  };

  return (
    <button
      onClick={scrollToTop}
      className={cn(
        'fixed bottom-6 right-6 z-50 p-3 rounded-full shadow-lg',
        'bg-brand-primary text-white',
        'transform-gpu transition-all duration-300 ease-out-expo',
        'flex items-center justify-center',
        'hover:bg-brand-primary/90 hover:shadow-xl hover:scale-105',
        visible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
      )}
      style={{
        willChange: 'transform, opacity',
        transform: `translate3d(0, ${visible ? 0 : 64}px, 0)`
      }}
      aria-label="Back to top"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
};

export default BackToTop;
