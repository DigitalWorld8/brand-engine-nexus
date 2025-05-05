
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import NavbarLogo from './NavbarLogo';
import LeftNavigation from './LeftNavigation';
import RightNavigation from './RightNavigation';
import NavbarFlags from './NavbarFlags';
import ServicesMegaOverlay from './ServicesMegaOverlay';

interface NavbarContainerProps {
  isScrolled: boolean;
  isInitialView?: boolean;
}

const NavbarContainer = ({ isScrolled, isInitialView = true }: NavbarContainerProps) => {
  const [servicesOpen, setServicesOpen] = useState(false);

  const handleServicesToggle = (isOpen: boolean) => {
    setServicesOpen(isOpen);
  };

  return (
    <div className={cn(
      "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative transition-all duration-500",
      isInitialView ? "scale-95" : "scale-100"
    )}>
      <div className="flex justify-between items-center">
        {/* Left Side Navigation */}
        <LeftNavigation />
        
        {/* Center Logo */}
        <NavbarLogo />
        
        {/* Right Side Navigation */}
        <RightNavigation onServicesToggle={handleServicesToggle} />
      </div>
      
      {/* NavbarFlags component without showFlags prop */}
      <NavbarFlags />

      {/* Services Mega Menu Overlay */}
      <ServicesMegaOverlay isOpen={servicesOpen} />
    </div>
  );
};

export default NavbarContainer;
