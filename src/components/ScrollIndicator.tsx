
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { ArrowDown } from 'lucide-react';

interface ScrollIndicatorProps {
  className?: string;
}

const ScrollIndicator = ({ className }: ScrollIndicatorProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const handleClick = () => {
    // Calculate a better scroll position - scroll to the first section below the hero
    const scrollTarget = window.innerHeight * 0.9;
    window.scrollTo({
      top: scrollTarget,
      behavior: 'smooth'
    });
    
    // After scrolling, add a small delay before hiding the indicator
    setTimeout(() => {
      setIsVisible(false);
    }, 500);
  };
  
  if (!isVisible) return null;
  
  return (
    <div 
      className={cn(
        "fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40 transition-all duration-500",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className={cn(
          "flex flex-col items-center gap-4 cursor-pointer",
          "transition-all duration-300",
          isHovered ? "translate-y-[-5px]" : ""
        )}
        onClick={handleClick}
      >
        <p className="text-lg md:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-accent-blue to-brand-primary drop-shadow-sm">
          SCROLL TO EXPLORE
        </p>
        
        {/* Animated line - made thicker */}
        <div className="w-[3px] h-16 relative overflow-hidden bg-gradient-to-b from-brand-accent-blue/20 to-brand-primary/20 rounded-full">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-brand-accent-blue to-brand-primary animate-pulse-down"></div>
        </div>
        
        {/* Animated arrow in glowing circle - made larger */}
        <div 
          className={cn(
            "relative flex items-center justify-center",
            "transition-all duration-300 ease-in-out",
            isHovered ? "scale-110" : "scale-100"
          )}
        >
          {/* Glowing background effect - enhanced glow */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-accent-blue to-brand-primary opacity-30 blur-md scale-125"></div>
          
          {/* Button with animation - made larger */}
          <div className="relative bg-white p-3 w-16 h-16 rounded-full flex items-center justify-center shadow-lg border border-brand-light-gray animate-subtle-bounce">
            <ArrowDown 
              className={cn(
                "h-8 w-8 text-brand-primary",
                "transition-all duration-300",
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
