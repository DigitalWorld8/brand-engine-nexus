
import React, { useState, useEffect } from 'react';
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
  const [navbarReady, setNavbarReady] = useState(false);

  // Add a slight delay before animations to ensure smooth loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setNavbarReady(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleServicesToggle = (isOpen: boolean) => {
    setServicesOpen(isOpen);
  };

  return (
    <div className={cn(
      "transition-all duration-800 ease-in-out",
      "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
      !navbarReady && "opacity-0"
    )}>
      <div className={cn(
        "flex w-full items-center justify-between",
        "transition-all duration-800 ease-in-out"
      )}>
        {/* Left Side Navigation */}
        <div className="flex-1">
          <LeftNavigation />
        </div>
        
        {/* Center Logo */}
        <div className="flex-none z-10 mx-4">
          <NavbarLogo />
        </div>
        
        {/* Right Side Navigation */}
        <div className="flex-1 flex justify-end">
          <RightNavigation onServicesToggle={handleServicesToggle} />
        </div>
      </div>
      
      {/* NavbarFlags component */}
      <div className="mt-2">
        <NavbarFlags />
      </div>

      {/* Services Mega Menu Overlay */}
      <ServicesMegaOverlay isOpen={servicesOpen} />
    </div>
  );
};

export default NavbarContainer;
