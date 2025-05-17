
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
    if (window.scrollY > 25) {
      setIsVisible(false);
    }
    
    const handleScroll = () => {
      // Hide the indicator when user scrolls down more than threshold
      if (window.scrollY > 25) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };
    
    // Add scroll event listener with passive flag for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const handleClick = () => {
    if (isScrolling) return; // Prevent multiple clicks during animation
    
    setIsScrolling(true);
    
    // Scroll down to explore content with Apple-like smoothness
    const startPosition = window.scrollY;
    const targetPosition = window.innerHeight; // Scroll down one viewport height
    const distance = targetPosition - startPosition;
    const duration = 300; // Reduced from 400ms to 300ms for faster animation
    const startTime = performance.now();
    
    // Apple-like easing function
    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
    
    const scrollStep = (timestamp: number) => {
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutCubic(progress);
      
      window.scrollTo({
        top: startPosition + distance * easedProgress,
        behavior: 'auto'
      });
      
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
        "fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none",
        className
      )}
      style={{
        transition: 'opacity 0.15s cubic-bezier(0.22, 1, 0.36, 1), transform 0.15s cubic-bezier(0.22, 1, 0.36, 1)', // Reduced from 0.25s to 0.15s
        willChange: 'opacity, transform'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className={cn(
          "flex flex-col items-center gap-4 cursor-pointer",
          isHovered ? "translate-y-[-5px]" : "",
          isScrolling ? "pointer-events-none" : ""
        )}
        style={{
          transition: 'transform 0.12s cubic-bezier(0.22, 1, 0.36, 1)', // Reduced from 0.2s to 0.12s
          willChange: 'transform'
        }}
        onClick={handleClick}
      >
        <p className="text-lg md:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-accent-blue to-brand-primary drop-shadow-sm">
          SCROLL TO EXPLORE
        </p>
        
        {/* Animated line with improved performance */}
        <div className="w-[3px] h-16 relative overflow-hidden bg-gradient-to-b from-brand-accent-blue/20 to-brand-primary/20 rounded-full">
          <div 
            className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-brand-accent-blue to-brand-primary" 
            style={{
              animation: 'pulse-down 0.6s cubic-bezier(0.22, 1, 0.36, 1) infinite', // Reduced from 0.8s to 0.6s
              willChange: 'transform',
              transform: 'translateZ(0)'
            }}
          ></div>
        </div>
        
        {/* Animated mouse pointer in glowing circle with optimized transitions */}
        <div 
          className={cn(
            "relative flex items-center justify-center",
            isHovered ? "scale-110" : "scale-100"
          )}
          style={{
            transition: 'transform 0.12s cubic-bezier(0.22, 1, 0.36, 1)', // Reduced from 0.2s to 0.12s
            willChange: 'transform'
          }}
        >
          {/* Glowing background effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-accent-blue to-brand-primary opacity-30 blur-md scale-125"></div>
          
          {/* Button with animation */}
          <div 
            className="relative bg-white p-3 w-16 h-16 rounded-full flex items-center justify-center shadow-lg border border-brand-light-gray"
            style={{
              animation: 'subtle-bounce 0.8s cubic-bezier(0.22, 1, 0.36, 1) infinite', // Reduced from 1s to 0.8s
              willChange: 'transform',
              transform: 'translateZ(0)'
            }}
          >
            <MousePointerClick 
              className={cn(
                "h-8 w-8 text-brand-primary",
                isHovered ? "translate-y-[2px]" : ""
              )}
              style={{
                transition: 'transform 0.12s cubic-bezier(0.22, 1, 0.36, 1)', // Reduced from 0.2s to 0.12s
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
