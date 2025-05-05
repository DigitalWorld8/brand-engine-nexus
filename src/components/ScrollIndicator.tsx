
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { ArrowDown } from 'lucide-react';
import { useNavbarScroll } from '@/hooks/useNavbarScroll';

interface ScrollIndicatorProps {
  className?: string;
}

const ScrollIndicator = ({ className }: ScrollIndicatorProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const { isInitialView, initialScrollBuffer } = useNavbarScroll();
  
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
  
  // Calculate pulsing effect based on scroll buffer
  const pulseIntensity = initialScrollBuffer / 100;
  
  return (
    <div 
      className={cn(
        "fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40 transition-all duration-500",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
        isInitialView ? "scroll-indicator-pulse" : "",
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
          <div 
            className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-brand-accent-blue to-brand-primary animate-pulse-down"
            style={{ 
              animationDuration: isInitialView ? '1.5s' : '2s',
              animationTimingFunction: isInitialView ? 'cubic-bezier(0.4, 0, 0.6, 1)' : 'ease-in-out'
            }}
          ></div>
        </div>
        
        {/* Animated arrow in glowing circle */}
        <div 
          className={cn(
            "relative flex items-center justify-center",
            "transition-all duration-300 ease-in-out",
            isHovered || isInitialView ? "scale-110" : "scale-100"
          )}
          style={{
            transform: `scale(${1 + (pulseIntensity * 0.1)})`
          }}
        >
          {/* Glowing background effect */}
          <div 
            className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-accent-blue to-brand-primary opacity-20 blur-md"
            style={{
              opacity: 0.2 + (pulseIntensity * 0.3)
            }}
          ></div>
          
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
