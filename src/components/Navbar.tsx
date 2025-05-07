
import React from 'react';
import { cn } from '@/lib/utils';
import { useNavbarScroll } from '@/hooks/useNavbarScroll';
import NavbarContainer from './navbar/NavbarContainer';
import NavbarLogo from './navbar/NavbarLogo';

const Navbar = () => {
  const {
    isScrolled,
    isInitialView
  } = useNavbarScroll();
  
  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 w-full z-[9999]",
      "transition-all duration-500 ease-in-out",
      "will-change-transform",
      isScrolled ? "bg-white shadow-md" : "bg-transparent"
    )}>
      {/* When not scrolled, show logo centered with elegant gradient background */}
      {!isScrolled ? (
        <div className="flex justify-center w-full py-4 bg-gradient-to-b from-white via-white to-white/80 backdrop-blur-sm rounded-b-lg mx-auto max-w-7xl" style={{ maxWidth: '90%' }}>
          <div className="scale-110 transition-all duration-300">
            <NavbarLogo />
          </div>
        </div>
      ) : (
        /* When scrolled, show full navbar container */
        <NavbarContainer isScrolled={isScrolled} isInitialView={isInitialView} />
      )}
    </header>
  );
};

export default Navbar;
