
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
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const handleServicesToggle = (isOpen: boolean) => {
    setServicesOpen(isOpen);
  };

  return (
    <div className={cn(
      "transform-gpu will-change-transform",
      "transition-all duration-1200 ease-ios",
      isScrolled 
        ? "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative" 
        : "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative",
      isInitialView ? "scale-95" : "scale-100",
      !navbarReady && "opacity-0"
    )}>
      <div className={cn(
        "flex w-full justify-center",
        "transition-all duration-1200 ease-ios"
      )}>
        {/* Left Side Navigation - Only visible when scrolled */}
        <div className={cn(
          "transition-all duration-800 ease-ios flex-1",
          isScrolled ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8 invisible absolute"
        )}>
          {isScrolled && <LeftNavigation />}
        </div>
        
        {/* Center Logo - Always visible and centered */}
        <div className={cn(
          "transition-all duration-1200 ease-ios flex-none z-10",
          isScrolled ? "" : ""
        )}>
          <NavbarLogo />
        </div>
        
        {/* Right Side Navigation - Only visible when scrolled */}
        <div className={cn(
          "transition-all duration-800 ease-ios flex-1",
          isScrolled ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8 invisible absolute"
        )}>
          {isScrolled && <RightNavigation onServicesToggle={handleServicesToggle} />}
        </div>
      </div>
      
      {/* NavbarFlags component - Only visible when scrolled */}
      <div className={cn(
        "transition-all duration-800 ease-ios",
        isScrolled ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 invisible"
      )}>
        {isScrolled && <NavbarFlags />}
      </div>

      {/* Services Mega Menu Overlay */}
      <ServicesMegaOverlay isOpen={servicesOpen && isScrolled} />
    </div>
  );
};

export default NavbarContainer;
