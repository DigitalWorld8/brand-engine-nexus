
import React, { useEffect, useState, useRef } from 'react';
import { ArrowUp } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useNavbarScroll } from '@/hooks/useNavbarScroll';
import { rafThrottle } from '@/lib/utils';

const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const { isScrolled } = useNavbarScroll();
  const buttonRef = useRef<HTMLButtonElement>(null);
  
  useEffect(() => {
    // Show button when user scrolls past the fold with optimized performance
    const handleScroll = rafThrottle(() => {
      const scrollY = window.scrollY;
      const threshold = window.innerHeight * 0.5;
      setVisible(scrollY > threshold);
    });

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Apply hardware acceleration to button when visible
  useEffect(() => {
    if (buttonRef.current) {
      if (visible) {
        buttonRef.current.style.willChange = 'transform, opacity';
        buttonRef.current.style.transform = 'translateZ(0)';
        buttonRef.current.style.backfaceVisibility = 'hidden';
      } else {
        // Reset will-change when not visible to free up resources
        buttonRef.current.style.willChange = 'auto';
      }
    }
  }, [visible]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      ref={buttonRef}
      onClick={scrollToTop}
      className={cn(
        'fixed bottom-6 right-6 z-50 p-3 rounded-full shadow-lg',
        'bg-brand-primary text-white',
        'transform-gpu transition-all duration-300 ease-out-expo',
        'flex items-center justify-center',
        'hover:bg-brand-primary/90 hover:shadow-xl hover:scale-105',
        visible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
      )}
      aria-label="Back to top"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
};

export default BackToTop;
