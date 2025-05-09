
import React from 'react';
import { cn } from '@/lib/utils';
import ServicesMegaMenuContent from './ServicesMegaMenuContent';

interface ServicesMegaOverlayProps {
  isOpen: boolean;
}

const ServicesMegaOverlay = ({ isOpen }: ServicesMegaOverlayProps) => {
  return (
    <div className={cn(
      "fixed left-0 right-0 top-0 h-screen transition-all duration-300 overflow-visible z-40", 
      isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
    )}>
      {/* Animated overlay backdrop */}
      <div className={cn(
        "absolute inset-0 bg-black/5 backdrop-blur-sm transition-opacity duration-300",
        isOpen ? "opacity-100" : "opacity-0"
      )} />
      
      {/* Menu content with animation */}
      <div className={cn(
        "absolute top-[72px] left-0 right-0 w-full transform transition-all duration-300",
        isOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
      )}>
        <ServicesMegaMenuContent />
      </div>
    </div>
  );
};

export default ServicesMegaOverlay;
