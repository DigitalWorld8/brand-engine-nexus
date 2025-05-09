
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
        isMorphed && "navbar-split-layout invisible" // Hide the original layout when morphed
      )}>
        {/* Left Side Navigation */}
        <div className={cn(
          "flex-1 transition-all duration-500 ease-in-out",
        )}>
          <LeftNavigation isMorphed={false} />
        </div>
        
        {/* Center Logo */}
        <div className={cn(
          "flex-none z-10 mx-4 transition-all duration-500 ease-in-out"
        )}>
          <NavbarLogo />
        </div>
        
        {/* Right Side Navigation */}
        <div className={cn(
          "flex-1 flex justify-end transition-all duration-500 ease-in-out"
        )}>
          <RightNavigation onServicesToggle={handleServicesToggle} isMorphed={false} />
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
      
      {/* Morphed layout - positioned absolutely when active */}
      {isMorphed && (
        <>
          {/* Left morphed navigation */}
          <div className="navbar-left-morph">
            <LeftNavigation isMorphed={true} />
          </div>
          
          {/* Center logo morphed */}
          <div className="navbar-logo-morph">
            <NavbarLogo />
          </div>
          
          {/* Right morphed navigation */}
          <div className="navbar-right-morph">
            <RightNavigation onServicesToggle={handleServicesToggle} isMorphed={true} />
          </div>
        </>
      )}
    </div>
  );
};

export default NavbarContainer;
