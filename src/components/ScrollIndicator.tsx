
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';
import { useNavbarScroll } from '@/hooks/useNavbarScroll';

interface ScrollIndicatorProps {
  className?: string;
}

const ScrollIndicator = ({ className }: ScrollIndicatorProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const { isPausedOnHero } = useNavbarScroll();
  
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
        "fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40 transition-all duration-500",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
        isPausedOnHero ? "animate-pulse" : "",
        className
      )}
    >
      <div className="flex flex-col items-center gap-2">
        <p className="text-sm font-medium text-brand-primary">Scroll to Explore</p>
        <div className={`animate-bounce bg-white p-2 w-10 h-10 ring-1 ring-brand-light-gray shadow-lg rounded-full flex items-center justify-center ${
          isPausedOnHero ? 'bg-brand-primary text-white' : ''
        }`}>
          <ChevronDown className={`h-6 w-6 ${isPausedOnHero ? 'text-white' : 'text-brand-primary'}`} />
        </div>
      </div>
    </div>
  );
};

export default ScrollIndicator;
