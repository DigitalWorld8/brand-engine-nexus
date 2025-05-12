
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import ServicesMegaMenuContent from './ServicesMegaMenuContent';
import MobileServiceMenu from './mobile/MobileServiceMenu';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useIsMobile } from '@/hooks/use-mobile';

interface ServicesMegaOverlayProps {
  isOpen: boolean;
  onClose?: () => void;
}

const ServicesMegaOverlay = ({ isOpen, onClose }: ServicesMegaOverlayProps) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  
  // Effect for handling clicks outside the dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && 
          overlayRef.current && 
          !overlayRef.current.contains(event.target as Node)) {
        if (onClose) {
          onClose();
        }
      }
    };
    
    // Add event listener when dropdown is open
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    // Clean up event listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <div className={cn(
      "fixed left-0 right-0 z-40", 
      isOpen ? "pointer-events-auto" : "pointer-events-none"
    )}>
      {/* Semi-transparent overlay backdrop that only covers the menu area */}
      <div 
        className={cn(
          "absolute inset-0 bg-white/80 backdrop-blur-sm transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0"
        )}
        onClick={onClose} // Close when clicking the backdrop
      />
      
      {/* Menu content with animation - positioned above the bottom navbar */}
      <div 
        ref={overlayRef}
        className={cn(
          "absolute left-0 right-0 w-full transform transition-all duration-300",
          /* Position the menu above the bottom navbar */
          isMobile ? "bottom-[60px]" : "bottom-[72px]", 
          isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        )}
      >
        {isMobile ? (
          <div className="max-w-md mx-auto rounded-lg shadow-lg overflow-hidden bg-white">
            <MobileServiceMenu onServiceSelect={onClose} />
          </div>
        ) : (
          <ServicesMegaMenuContent />
        )}
      </div>
    </div>
  );
};

export default ServicesMegaOverlay;
