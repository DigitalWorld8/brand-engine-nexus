
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { MousePointerClick } from 'lucide-react';

interface ScrollIndicatorProps {
  className?: string;
}

const ScrollIndicator = ({ className }: ScrollIndicatorProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  
  useEffect(() => {
    // Set initial visibility based on scroll position when component mounts
    if (window.scrollY > 100) {
      setIsVisible(false);
    }
    
    const handleScroll = () => {
      // Hide the indicator when user scrolls down more than 100px
      if (window.scrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const handleClick = () => {
    if (isScrolling) return; // Prevent multiple clicks during animation
    
    setIsScrolling(true);
    
    // Scroll down to explore content - faster scroll
    const startPosition = window.scrollY;
    const targetPosition = window.innerHeight; // Scroll down one viewport height
    const distance = targetPosition - startPosition;
    const duration = 600; // Reduced from 800ms to 600ms for faster scroll
    const startTime = performance.now();
    
    // Cubic easing function for smooth scrolling
    const easeInOutCubic = (t: number) => 
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    
    const scrollStep = (timestamp: number) => {
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeInOutCubic(progress);
      
      window.scrollTo(0, startPosition + distance * easedProgress);
      
      if (progress < 1) {
        window.requestAnimationFrame(scrollStep);
      } else {
        setIsScrolling(false);
        
        // Hide indicator after scrolling is complete
        setIsVisible(false);
      }
    };
    
    window.requestAnimationFrame(scrollStep);
  };
  
  // If not visible, don't render the component at all
  if (!isVisible) return null;
  
  return (
    <div 
      className={cn(
        "fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40 transition-all duration-300", // Reduced from 500ms to 300ms
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className={cn(
          "flex flex-col items-center gap-4 cursor-pointer",
          "transition-all duration-200", // Reduced from 300ms to 200ms
          isHovered ? "translate-y-[-5px]" : "",
          isScrolling ? "pointer-events-none" : ""
        )}
        onClick={handleClick}
      >
        <p className="text-lg md:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-accent-blue to-brand-primary drop-shadow-sm">
          SCROLL TO EXPLORE
        </p>
        
        {/* Animated line */}
        <div className="w-[3px] h-16 relative overflow-hidden bg-gradient-to-b from-brand-accent-blue/20 to-brand-primary/20 rounded-full">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-brand-accent-blue to-brand-primary animate-pulse-down"></div>
        </div>
        
        {/* Animated mouse pointer in glowing circle */}
        <div 
          className={cn(
            "relative flex items-center justify-center",
            "transition-all duration-200 ease-in-out", // Reduced from 300ms to 200ms
            isHovered ? "scale-110" : "scale-100"
          )}
        >
          {/* Glowing background effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-accent-blue to-brand-primary opacity-30 blur-md scale-125"></div>
          
          {/* Button with animation */}
          <div className="relative bg-white p-3 w-16 h-16 rounded-full flex items-center justify-center shadow-lg border border-brand-light-gray animate-subtle-bounce">
            <MousePointerClick 
              className={cn(
                "h-8 w-8 text-brand-primary",
                "transition-all duration-200", // Reduced from 300ms to 200ms
                isHovered ? "translate-y-[2px]" : ""
              )} 
              strokeWidth={2.5} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollIndicator;
