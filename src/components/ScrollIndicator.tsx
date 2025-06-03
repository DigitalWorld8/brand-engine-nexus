
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
    if (window.scrollY > 50) {
      setIsVisible(false);
    }
    
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const handleClick = () => {
    if (isScrolling) return;
    
    setIsScrolling(true);
    
    const startPosition = window.scrollY;
    const targetPosition = window.innerHeight;
    const distance = targetPosition - startPosition;
    const duration = 800; // Slower, more elegant animation
    const startTime = performance.now();
    
    // Enhanced easing function for smoother animation
    const easeInOutQuart = (t: number) => {
      return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t;
    };
    
    const scrollStep = (timestamp: number) => {
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeInOutQuart(progress);
      
      window.scrollTo({
        top: startPosition + distance * easedProgress,
        behavior: 'auto'
      });
      
      if (progress < 1) {
        window.requestAnimationFrame(scrollStep);
      } else {
        setIsScrolling(false);
        setIsVisible(false);
      }
    };
    
    window.requestAnimationFrame(scrollStep);
  };
  
  if (!isVisible) return null;
  
  return (
    <div 
      className={cn(
        "fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none",
        className
      )}
      style={{
        transition: 'opacity 0.6s cubic-bezier(0.165, 0.84, 0.44, 1), transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)',
        willChange: 'opacity, transform'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className={cn(
          "flex flex-col items-center gap-6 cursor-pointer",
          isHovered ? "translate-y-[-8px]" : "",
          isScrolling ? "pointer-events-none" : ""
        )}
        style={{
          transition: 'transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)',
          willChange: 'transform'
        }}
        onClick={handleClick}
      >
        <p className="text-lg md:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-accent-blue to-brand-primary drop-shadow-sm animate-pulse">
          SCROLL TO EXPLORE
        </p>
        
        {/* Enhanced animated line */}
        <div className="w-[3px] h-20 relative overflow-hidden bg-gradient-to-b from-brand-accent-blue/20 to-brand-primary/20 rounded-full">
          <div 
            className="absolute top-0 left-0 w-full bg-gradient-to-b from-brand-accent-blue to-brand-primary rounded-full" 
            style={{
              height: '30%',
              animation: 'scroll-flow 2s cubic-bezier(0.165, 0.84, 0.44, 1) infinite',
              willChange: 'transform',
              transform: 'translateZ(0)'
            }}
          ></div>
        </div>
        
        {/* Enhanced mouse pointer with glow effect */}
        <div 
          className={cn(
            "relative flex items-center justify-center",
            isHovered ? "scale-125" : "scale-100"
          )}
          style={{
            transition: 'transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)',
            willChange: 'transform'
          }}
        >
          {/* Enhanced glowing background */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-accent-blue to-brand-primary opacity-40 blur-lg scale-150 animate-pulse"></div>
          
          {/* Enhanced button with better animation */}
          <div 
            className="relative bg-white p-4 w-20 h-20 rounded-full flex items-center justify-center shadow-2xl border border-brand-light-gray"
            style={{
              animation: 'gentle-float 3s cubic-bezier(0.165, 0.84, 0.44, 1) infinite',
              willChange: 'transform',
              transform: 'translateZ(0)'
            }}
          >
            <MousePointerClick 
              className={cn(
                "h-10 w-10 text-brand-primary",
                isHovered ? "translate-y-[3px] scale-110" : ""
              )}
              style={{
                transition: 'transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)',
                willChange: 'transform'
              }}
              strokeWidth={2.5} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollIndicator;
