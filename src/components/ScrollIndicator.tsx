
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
    if (window.scrollY > 25) { // Reduced from 50 to 25 for faster hiding
      setIsVisible(false);
    }
    
    const handleScroll = () => {
      // Hide the indicator when user scrolls down more than threshold
      if (window.scrollY > 25) { // Reduced from 50 to 25 for faster hiding
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
    // Check if scroll is locked by inspecting body class
    if (document.body.classList.contains('scroll-locked')) {
      return; // Don't allow scrolling if locked
    }
    
    if (isScrolling) return; // Prevent multiple clicks during animation
    
    setIsScrolling(true);
    
    // Scroll down to explore content - even faster scroll
    const startPosition = window.scrollY;
    const targetPosition = window.innerHeight; // Scroll down one viewport height
    const distance = targetPosition - startPosition;
    const duration = 300; // Reduced from 450ms to 300ms for faster scroll
    const startTime = performance.now();
    
    // Optimized cubic easing function for smooth scrolling
    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
    
    const scrollStep = (timestamp: number) => {
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutCubic(progress);
      
      window.scrollTo({
        top: startPosition + distance * easedProgress,
        behavior: 'auto' // Use 'auto' instead of default to bypass smooth scroll for better performance
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
        transition: 'opacity 0.15s cubic-bezier(0.33, 1, 0.68, 1), transform 0.15s cubic-bezier(0.33, 1, 0.68, 1)', // Reduced from 0.2s to 0.15s
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
          transition: 'transform 0.1s cubic-bezier(0.34, 1.56, 0.64, 1)', // Reduced from 0.15s to 0.1s
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
              animation: 'pulse-down 1s cubic-bezier(0.45, 0, 0.55, 1) infinite', // Reduced from 1.4s to 1s
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
            transition: 'transform 0.1s cubic-bezier(0.34, 1.56, 0.64, 1)', // Reduced from 0.15s to 0.1s
            willChange: 'transform'
          }}
        >
          {/* Glowing background effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-accent-blue to-brand-primary opacity-30 blur-md scale-125"></div>
          
          {/* Button with animation */}
          <div 
            className="relative bg-white p-3 w-16 h-16 rounded-full flex items-center justify-center shadow-lg border border-brand-light-gray"
            style={{
              animation: 'subtle-bounce 1s cubic-bezier(0.45, 0, 0.55, 1) infinite', // Reduced from 1.5s to 1s
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
                transition: 'transform 0.1s cubic-bezier(0.34, 1.56, 0.64, 1)', // Reduced from 0.15s to 0.1s
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
