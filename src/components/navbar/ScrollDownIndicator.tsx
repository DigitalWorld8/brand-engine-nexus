
import React, { useEffect, useState } from 'react';
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
    isScrolled,
    hasScrolled
  } = useNavbarScroll();
  
  const [hasScrolledBefore, setHasScrolledBefore] = useState(false);
  
  // Track if user has ever scrolled down
  useEffect(() => {
    if (isScrolled) {
      setHasScrolledBefore(true);
    }
  }, [isScrolled]);

  // Hide indicator when scrolled or if the user has scrolled before
  if (isScrolled || hasScrolledBefore) return null;

  const handleScrollDown = () => {
    // Scroll to first content section
    const firstSection = document.querySelector('section');
    if (firstSection) {
      const yOffset = -80; // Offset to account for header
      const y = firstSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
      // Set scrolled before to true immediately on click
      setHasScrolledBefore(true);
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
      <div className="flex flex-col items-center justify-between gap-2 -mt-24">
        {/* Pill shape container */}
        <div className="h-12 w-6 rounded-full border border-gray-300 flex items-center justify-center relative">
          {/* Animated dot - now using the scrolling-dot class for animation */}
          <div className="scrolling-dot w-1.5 h-1.5 bg-black rounded-full absolute"></div>
        </div>
        {/* Arrow below the pill */}
        <ArrowDown className="h-4 w-4 text-gray-600" strokeWidth={2} />
      </div>
    </div>
  );
};

export default ScrollDownIndicator;
