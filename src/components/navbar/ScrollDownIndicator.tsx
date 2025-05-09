
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
        "flex flex-col items-center cursor-pointer",
        "transition-all duration-300 hover:scale-110", 
        className
      )} 
      onClick={handleScrollDown} 
      aria-label="Scroll down" 
      role="button"
    >
      <div className="text-brand-text text-sm font-medium mb-2 pulse-opacity">
        Scroll to know more about us
      </div>
      <div className="relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-brand-accent-blue to-brand-primary rounded-full opacity-70 blur-sm"></div>
        <div className="relative bg-brand-accent-blue hover:bg-brand-primary transition-colors duration-300 rounded-full p-2 shadow-lg">
          <ArrowDown className="h-5 w-5 text-white" strokeWidth={2.5} />
        </div>
      </div>
    </div>
  );
};

export default ScrollDownIndicator;
