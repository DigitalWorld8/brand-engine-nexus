
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
      "transition-all duration-300 ease-in-out",
      "will-change-transform",
      isScrolled ? "bg-white shadow-md" : "bg-transparent"
    )}>
      {/* When not scrolled, show only logo centered with white background */}
      {!isScrolled ? (
        <div className="flex justify-center w-full py-4 bg-white rounded-b-lg mx-auto" style={{ maxWidth: '300px' }}>
          <NavbarLogo />
        </div>
      ) : (
        /* When scrolled, show full navbar container */
        <NavbarContainer isScrolled={isScrolled} isInitialView={isInitialView} />
      )}
    </header>
  );
};

export default Navbar;
