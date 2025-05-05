
import React from 'react';
import { cn } from '@/lib/utils';
import ServicesMegaMenuContent from './ServicesMegaMenuContent';

interface ServicesMegaOverlayProps {
  isOpen: boolean;
}

const ServicesMegaOverlay = ({ isOpen }: ServicesMegaOverlayProps) => {
  return (
    <div className={cn("absolute left-0 right-0 top-full mt-1 transition-all duration-300 overflow-visible z-50", 
      isOpen ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0")}>
      <ServicesMegaMenuContent />
    </div>
  );
};

export default ServicesMegaOverlay;
