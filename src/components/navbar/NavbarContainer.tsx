
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
      "transition-all duration-700 ease-in-out",
      isScrolled 
        ? "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative" 
        : "w-full px-4 sm:px-6 lg:px-8 relative flex justify-center",
      isInitialView ? "scale-95" : "scale-100"
    )}>
      <div className={cn(
        "flex justify-between items-center w-full",
        !isScrolled && "justify-center" 
      )}>
        {/* Left Side Navigation - Only visible when scrolled */}
        {isScrolled && <LeftNavigation />}
        
        {/* Center Logo - Always visible */}
        <NavbarLogo />
        
        {/* Right Side Navigation - Only visible when scrolled */}
        {isScrolled && <RightNavigation onServicesToggle={handleServicesToggle} />}
      </div>
      
      {/* NavbarFlags component - Only visible when scrolled */}
      {isScrolled && <NavbarFlags />}

      {/* Services Mega Menu Overlay */}
      <ServicesMegaOverlay isOpen={servicesOpen && isScrolled} />
    </div>
  );
};

export default NavbarContainer;
