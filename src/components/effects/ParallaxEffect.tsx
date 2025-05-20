
import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

interface ParallaxEffectProps {
  children: React.ReactNode;
  speed?: number; // Higher number = more effect (0.1-1 recommended)
  direction?: 'up' | 'down';
  className?: string;
}

const ParallaxEffect: React.FC<ParallaxEffectProps> = ({
  children,
  speed = 0.3,
  direction = 'up',
  className = ''
}) => {
  const [offset, setOffset] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const ticking = useRef(false);
  
  // Skip parallax on mobile for performance
  if (isMobile) {
    return <div className={className}>{children}</div>;
  }

  // Optimized scroll handler using requestAnimationFrame
  const handleScroll = useCallback(() => {
    if (!elementRef.current || ticking.current) return;
    
    ticking.current = true;
    
    requestAnimationFrame(() => {
      const rect = elementRef.current?.getBoundingClientRect();
      if (!rect) {
        ticking.current = false;
        return;
      }
      
      const windowHeight = window.innerHeight;
      
      // Only update when element is in view (plus some buffer)
      if (rect.top < windowHeight + 200 && rect.bottom > -200) {
        // Calculate how far through the element we've scrolled (0-1)
        const elementScrollProgress = (windowHeight - rect.top) / (windowHeight + rect.height);
        
        // Calculate parallax offset based on direction and speed
        const directionMultiplier = direction === 'up' ? -1 : 1;
        const parallaxOffset = elementScrollProgress * speed * 15 * directionMultiplier;
        
        setOffset(parallaxOffset);
      }
      
      ticking.current = false;
    });
  }, [speed, direction]);
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculation
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <div 
      ref={elementRef} 
      className={className}
      style={{ 
        transform: `translateY(${offset}px)`,
        transition: 'transform 0.03s cubic-bezier(0.16, 1, 0.3, 1)',
        willChange: 'transform',
        backfaceVisibility: 'hidden'
      }}
    >
      {children}
    </div>
  );
};

export default ParallaxEffect;
