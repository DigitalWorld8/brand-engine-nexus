
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { ArrowDown } from 'lucide-react';

interface ScrollIndicatorProps {
  className?: string;
}

const ScrollIndicator = ({ className }: ScrollIndicatorProps) => {
  const [isVisible, setIsVisible] = useState(true);
  
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
        className
      )}
    >
      <div className="flex flex-col items-center gap-3">
        <p className="text-base font-semibold text-brand-accent-blue">Scroll to Explore</p>
        <div className="relative">
          <div className="absolute -inset-1.5 bg-white/30 rounded-full blur-sm"></div>
          <div className="animate-bounce bg-gradient-to-r from-brand-accent-blue to-brand-accent-violet p-3 w-14 h-14 ring-2 ring-white shadow-lg rounded-full flex items-center justify-center relative z-10">
            <ArrowDown className="h-7 w-7 text-white" strokeWidth={2.5} />
          </div>
        </div>
        <div className="h-6 w-1 bg-brand-accent-blue/40 rounded-full animate-pulse"></div>
      </div>
    </div>
  );
};

export default ScrollIndicator;
