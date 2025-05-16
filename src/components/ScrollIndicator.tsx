
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { MousePointerClick } from 'lucide-react';
import { motion } from 'framer-motion';

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
    
    // Advanced scroll animation with spring physics
    const startPosition = window.scrollY;
    const targetPosition = window.innerHeight * 0.8; // Scroll down 80% of viewport
    const distance = targetPosition - startPosition;
    const duration = 800; // Smoother, longer animation
    const startTime = performance.now();
    
    // Spring-like easing function
    const easeOutSpring = (t: number) => {
      // Approximates a spring curve
      return 1 - Math.pow(1 - t, 3) * Math.cos(t * Math.PI * 2);
    };
    
    const scrollStep = (timestamp: number) => {
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutSpring(progress);
      
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
  
  // If not visible, don't render the component at all
  if (!isVisible) return null;
  
  return (
    <motion.div 
      className={cn(
        "fixed bottom-8 left-1/2 z-40",
        className
      )}
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 10, opacity: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      style={{ x: "-50%" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div 
        className="flex flex-col items-center gap-4 cursor-pointer"
        whileHover={{ y: -5 }}
        whileTap={{ scale: 0.97 }}
        onClick={handleClick}
      >
        <motion.p 
          className="text-lg md:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-accent-blue to-brand-primary drop-shadow-sm"
          animate={{ opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          SCROLL TO EXPLORE
        </motion.p>
        
        {/* Animated line with improved performance */}
        <div className="w-[3px] h-16 relative overflow-hidden bg-gradient-to-b from-brand-accent-blue/20 to-brand-primary/20 rounded-full">
          <motion.div 
            className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-brand-accent-blue to-brand-primary" 
            animate={{ 
              y: ["0%", "100%", "0%"] 
            }}
            transition={{ 
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          ></motion.div>
        </div>
        
        {/* Animated mouse pointer in glowing circle with advanced animations */}
        <div className="relative flex items-center justify-center">
          {/* Glowing background effect */}
          <motion.div 
            className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-accent-blue to-brand-primary opacity-30 blur-md"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          ></motion.div>
          
          {/* Button with animation */}
          <motion.div 
            className="relative bg-white p-3 w-16 h-16 rounded-full flex items-center justify-center shadow-lg border border-brand-light-gray"
            animate={{ 
              y: [0, -5, 0]
            }}
            transition={{ 
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <motion.div
              whileHover={{ rotate: 10, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <MousePointerClick 
                className="h-8 w-8 text-brand-primary"
                strokeWidth={2.5} 
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ScrollIndicator;
