
import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useNavbarScroll } from '@/hooks/useNavbarScroll';

const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const { isScrolled } = useNavbarScroll();

  useEffect(() => {
    // Show button when user scrolls past the fold
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const threshold = window.innerHeight * 0.5; // Show after scrolling 50% of viewport height
      setVisible(scrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
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
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
};

export default BackToTop;
