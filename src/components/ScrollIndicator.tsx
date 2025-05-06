
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
  
  if (!isVisible) return null;
  
  return (
    <div 
      className={cn(
        "absolute md:right-4 right-2 top-0 md:top-2 z-40 transition-all duration-500",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className={cn(
          "flex flex-col items-center gap-3 cursor-pointer",
          "transition-all duration-300",
          isHovered ? "translate-y-[-5px]" : ""
        )}
        onClick={() => window.scrollTo({top: window.innerHeight, behavior: 'smooth'})}
      >
        <p className="text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-brand-accent-blue to-brand-primary">
          Scroll to Explore
        </p>
        
        {/* Animated line */}
        <div className="w-[2px] h-10 relative overflow-hidden bg-gradient-to-b from-brand-accent-blue/20 to-brand-primary/20 rounded-full">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-brand-accent-blue to-brand-primary animate-pulse-down"></div>
        </div>
        
        {/* Animated arrow in glowing circle */}
        <div 
          className={cn(
            "relative flex items-center justify-center",
            "transition-all duration-300 ease-in-out",
            isHovered ? "scale-110" : "scale-100"
          )}
        >
          {/* Glowing background effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-accent-blue to-brand-primary opacity-20 blur-md"></div>
          
          {/* Button with animation */}
          <div className="relative bg-white p-3 w-12 h-12 rounded-full flex items-center justify-center shadow-lg border border-brand-light-gray animate-subtle-bounce">
            <ArrowDown 
              className={cn(
                "h-6 w-6 text-brand-primary",
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
