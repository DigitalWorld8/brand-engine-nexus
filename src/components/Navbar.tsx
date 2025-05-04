
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { useNavbarScroll } from '@/hooks/useNavbarScroll';
import NavbarLogo from './navbar/NavbarLogo';
import LeftNavigation from './navbar/LeftNavigation';
import RightNavigation from './navbar/RightNavigation';
import NavbarFlags from './navbar/NavbarFlags';

const Navbar = () => {
  const { isScrolled, showFlags } = useNavbarScroll();
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-md py-3' 
          : 'bg-transparent py-5'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-center">
          {/* Left Side Navigation */}
          <LeftNavigation />
          
          {/* Center Logo */}
          <NavbarLogo />
          
          {/* Right Side Navigation */}
          <RightNavigation />
        </div>
        
        {/* Dropdown Flags */}
        <NavbarFlags showFlags={showFlags} />
      </div>
    </header>
  );
};

export default Navbar;
