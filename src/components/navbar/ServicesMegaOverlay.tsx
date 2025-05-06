
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
      <div className="absolute top-1/2 left-0 right-0 w-full transform -translate-y-1/2">
        <ServicesMegaMenuContent />
      </div>
    </div>
  );
};

export default ServicesMegaOverlay;
