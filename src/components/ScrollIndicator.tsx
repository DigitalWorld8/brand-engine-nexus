
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
      if (window.scrollY > 80) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  if (!isVisible) return null;
  
  const handleClick = () => {
    // Scroll down to start exploring content (window.innerHeight provides a full viewport scroll)
    window.scrollTo({top: window.innerHeight, behavior: 'smooth'});
    // Hide the indicator after clicking
    setTimeout(() => setIsVisible(false), 800);
  };
  
  return (
    <div 
      className={cn(
        "fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40 transition-all duration-1200 ease-ios",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className={cn(
          "flex flex-col items-center gap-3 cursor-pointer",
          "transition-all duration-800 ease-ios",
          isHovered ? "translate-y-[-5px]" : ""
        )}
        onClick={handleClick}
      >
        <p className="text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-brand-accent-blue to-brand-primary">
          Scroll to Explore
        </p>
        
        {/* Animated line */}
        <div className="w-[2px] h-12 relative overflow-hidden bg-gradient-to-b from-brand-accent-blue/20 to-brand-primary/20 rounded-full">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-brand-accent-blue to-brand-primary animate-pulse-down"></div>
        </div>
        
        {/* Animated arrow in glowing circle */}
        <div 
          className={cn(
            "relative flex items-center justify-center",
            "transition-all duration-800 ease-ios",
            isHovered ? "scale-110" : "scale-100"
          )}
        >
          {/* Glowing background effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-accent-blue to-brand-primary opacity-20 blur-md scale-transition"></div>
          
          {/* Button with animation */}
          <div className="relative bg-white p-3 w-14 h-14 rounded-full flex items-center justify-center shadow-lg border border-brand-light-gray animate-subtle-bounce">
            <ArrowDown 
              className={cn(
                "h-6 w-6 text-brand-primary",
                "transition-all duration-800 ease-ios",
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
