
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import NavbarLogo from './NavbarLogo';
import LeftNavigation from './LeftNavigation';
import RightNavigation from './RightNavigation';
import NavbarFlags from './NavbarFlags';
import ServicesMegaOverlay from './ServicesMegaOverlay';
import { useNavbarScroll } from '@/hooks/useNavbarScroll';

interface NavbarContainerProps {
  isScrolled: boolean;
  isInitialView?: boolean;
}

const NavbarContainer = ({ isScrolled, isInitialView = true }: NavbarContainerProps) => {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [navbarReady, setNavbarReady] = useState(false);
  const { isMorphed } = useNavbarScroll();

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
      "transition-all duration-500 ease-in-out",
      "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
      !navbarReady && "opacity-0",
      // Apply morph state classes
      isMorphed ? "navbar-morph-active" : ""
    )}>
      <div className={cn(
        "flex w-full items-center justify-between",
        "transition-all duration-500 ease-in-out",
        // Apply split layout effect when morphed
        isMorphed && "navbar-split-layout"
      )}>
        {/* Left Side Navigation */}
        <div className={cn(
          "flex-1 transition-all duration-500 ease-in-out",
          isMorphed && "navbar-left-morph"
        )}>
          <LeftNavigation isMorphed={isMorphed} />
        </div>
        
        {/* Center Logo */}
        <div className={cn(
          "flex-none z-10 mx-4 transition-all duration-500 ease-in-out",
          isMorphed && "navbar-logo-morph"
        )}>
          <NavbarLogo />
        </div>
        
        {/* Right Side Navigation */}
        <div className={cn(
          "flex-1 flex justify-end transition-all duration-500 ease-in-out",
          isMorphed && "navbar-right-morph"
        )}>
          <RightNavigation onServicesToggle={handleServicesToggle} isMorphed={isMorphed} />
        </div>
      </div>
      
      {/* NavbarFlags component */}
      <div className={cn(
        "mt-2 transition-all duration-500 ease-in-out",
        isMorphed && "opacity-0 pointer-events-none"
      )}>
        <NavbarFlags />
      </div>

      {/* Services Mega Menu Overlay */}
      <ServicesMegaOverlay isOpen={servicesOpen} />
    </div>
  );
};

export default NavbarContainer;
