
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

  return (
    <div className={cn(
      "transition-all duration-300 ease-in-out w-full",
      !navbarReady && "opacity-0"
    )}>
      <div className={cn(
        "flex items-center justify-center",
        "transition-all duration-300 ease-in-out"
      )}>
        {/* Center Logo */}
        <div className="absolute z-10 top-0 mx-auto bg-white px-6 py-2 rounded-b-xl shadow-md">
          <NavbarLogo />
        </div>
      </div>
      
      <div className="flex justify-between items-center w-full h-screen pointer-events-none">
        {/* Left Side Navigation - Vertically Centered */}
        <div className="flex-none max-w-[45%] pointer-events-auto">
          <LeftNavigation />
        </div>
        
        {/* Right Side Navigation - Vertically Centered */}
        <div className="flex-none max-w-[45%] pointer-events-auto">
          <RightNavigation onServicesToggle={handleServicesToggle} />
        </div>
      </div>
      
      {/* NavbarFlags component */}
      <div className="mt-2 hidden">
        <NavbarFlags />
      </div>

      {/* Services Mega Menu Overlay */}
      <ServicesMegaOverlay isOpen={servicesOpen} />
    </div>
  );
};

export default NavbarContainer;
