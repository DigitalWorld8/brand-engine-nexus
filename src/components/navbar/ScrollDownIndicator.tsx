
import React from 'react';
import { cn } from '@/lib/utils';
import { ArrowDown } from 'lucide-react';
import { useNavbarScroll } from '@/hooks/useNavbarScroll';

interface ScrollDownIndicatorProps {
  className?: string;
}

const ScrollDownIndicator = ({
  className
}: ScrollDownIndicatorProps) => {
  const {
    isScrolled
  } = useNavbarScroll();

  // Hide indicator when scrolled
  if (isScrolled) return null;

  const handleScrollDown = () => {
    // Scroll to first content section
    const firstSection = document.querySelector('section');
    if (firstSection) {
      const yOffset = -80; // Increased offset to account for taller header
      const y = firstSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div 
      className={cn(
        "flex flex-col items-center cursor-pointer -mt-4", 
        "transition-all duration-300 hover:scale-110", 
        className
      )} 
      onClick={handleScrollDown} 
      aria-label="Scroll down" 
      role="button"
    >
      <div className="relative h-10 w-10 flex items-center justify-center">
        <div className="absolute inset-0 rounded-full border border-gray-300"></div>
        <ArrowDown className="h-5 w-5 text-brand-text" strokeWidth={1.5} />
      </div>
    </div>
  );
};

export default ScrollDownIndicator;
