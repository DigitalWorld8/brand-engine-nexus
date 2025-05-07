import React from 'react';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';
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
      const yOffset = -50; // Offset to account for fixed header
      const y = firstSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
    }
  };
  return <div className={cn("flex flex-col items-center cursor-pointer", "transition-all duration-300 hover:opacity-90", className)} onClick={handleScrollDown} aria-label="Scroll down" role="button">
      <div className="text-blue-text-sm font-medium mb-1 pulse-opacity">Scroll</div>
      <div className="bg-brand-accent-blue rounded-full p-1 animate-bounce shadow-lg">
        <ChevronDown className="h-5 w-5 text-white" strokeWidth={2.5} />
      </div>
    </div>;
};
export default ScrollDownIndicator;