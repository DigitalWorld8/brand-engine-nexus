
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import NavbarLogo from './NavbarLogo';
import LeftNavigation from './LeftNavigation';
import RightNavigation from './RightNavigation';
import ServicesMegaOverlay from './ServicesMegaOverlay';

interface NavbarContainerProps {
  isScrolled: boolean;
  isInitialView?: boolean;
}

const NavbarContainer = ({ isScrolled, isInitialView = true }: NavbarContainerProps) => {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [navbarReady, setNavbarReady] = useState(false);

  // Make the navbar render faster
  useEffect(() => {
    const timer = setTimeout(() => {
      setNavbarReady(true);
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  const handleServicesToggle = (isOpen: boolean) => {
    setServicesOpen(isOpen);
  };

  const handleServicesClose = () => {
    setServicesOpen(false);
  };

  return (
    <div className={cn(
      "transition-all duration-300 ease-in-out py-2", // Added padding-y to make navbar more compact
      "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
      !navbarReady && "opacity-0"
    )}>
      <div className={cn(
        "flex w-full items-center justify-between",
        "transition-all duration-300 ease-in-out"
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

      {/* Services Mega Menu Overlay */}
      <ServicesMegaOverlay isOpen={servicesOpen} onClose={handleServicesClose} />
    </div>
  );
};

export default NavbarContainer;
