
import React from 'react';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';
import { useNavbarScroll } from '@/hooks/useNavbarScroll';

interface ScrollDownIndicatorProps {
  className?: string;
}

const ScrollDownIndicator = ({ className }: ScrollDownIndicatorProps) => {
  const { isScrolled } = useNavbarScroll();
  
  // Hide indicator when scrolled
  if (isScrolled) return null;
  
  const handleScrollDown = () => {
    // Scroll to first content section
    const firstSection = document.querySelector('section');
    if (firstSection) {
      const yOffset = -50; // Offset to account for fixed header
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
        "transition-all duration-300 hover:opacity-80",
        className
      )}
      onClick={handleScrollDown}
      aria-label="Scroll down"
      role="button"
    >
      <div className="text-white text-sm font-medium mb-1">Scroll</div>
      <div className="animate-bounce">
        <ChevronDown className="h-6 w-6 text-white" strokeWidth={3} />
      </div>
    </div>
  );
};

export default ScrollDownIndicator;
