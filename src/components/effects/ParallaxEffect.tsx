
import React, { useEffect, useState, useRef } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

interface ParallaxElementProps {
  children: React.ReactNode;
  speed?: number; // Higher number = more effect (1-5 recommended)
  direction?: 'up' | 'down';
  className?: string;
}

const ParallaxElement: React.FC<ParallaxElementProps> = ({
  children,
  speed = 1,
  direction = 'up',
  className = ''
}) => {
  const [offset, setOffset] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number>();
  const isMobile = useIsMobile();
  const lastScrollY = useRef(0);
  const isVisibleRef = useRef(false);

  // Skip parallax on mobile for performance
  if (isMobile) {
    return <div className={className}>{children}</div>;
  }

  useEffect(() => {
    // Optimize scroll handler with RAF and element visibility check
    const updateParallax = () => {
      if (!elementRef.current) return;
      
      const currentScrollY = window.scrollY;
      
      // Only process if scroll position actually changed
      if (currentScrollY !== lastScrollY.current) {
        lastScrollY.current = currentScrollY;
        
        const rect = elementRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Check if element is in viewport with buffer
        const isVisible = rect.top < windowHeight + 200 && rect.bottom > -200;
        isVisibleRef.current = isVisible;
        
        // Only update when element is in view with buffer zone
        if (isVisible) {
          // Calculate how far through the element we've scrolled (0-1)
          const elementScrollProgress = (windowHeight - rect.top) / (windowHeight + rect.height);
          
          // Calculate parallax offset based on direction and speed
          const directionMultiplier = direction === 'up' ? -1 : 1;
          const parallaxOffset = elementScrollProgress * speed * 20 * directionMultiplier;
          
          // Use transform for better performance
          setOffset(parallaxOffset);
        }
      }
      
      requestRef.current = requestAnimationFrame(updateParallax);
    };
    
    // Start the animation loop
    requestRef.current = requestAnimationFrame(updateParallax);
    
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [speed, direction]);

  return (
    <div 
      ref={elementRef} 
      className={`transform-gpu ${className}`}
      style={{ 
        transform: `translate3d(0, ${offset}px, 0)`,
        willChange: 'transform',
        backfaceVisibility: 'hidden'
      }}
    >
      {children}
    </div>
  );
};

export default ParallaxElement;
