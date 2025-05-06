
import React from 'react';
import { cn } from '@/lib/utils';
import { useNavbarScroll } from '@/hooks/useNavbarScroll';
import NavbarContainer from './navbar/NavbarContainer';
import NavbarLogo from './navbar/NavbarLogo';

const Navbar = () => {
  const { isScrolled, isInitialView } = useNavbarScroll();
  
  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-[99999] w-full', // Increased z-index even more
      'transition-all duration-300 ease-smooth',
      'will-change-transform', // Improve performance for fixed elements
      isScrolled 
        ? 'bg-white/90 backdrop-blur-md shadow-md py-3' 
        : 'bg-transparent py-5'
    )}>
      {/* When not scrolled, show only logo centered */}
      {!isScrolled ? (
        <div className="flex justify-center w-full py-4">
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
