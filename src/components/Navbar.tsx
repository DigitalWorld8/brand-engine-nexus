
import React from 'react';
import { cn } from '@/lib/utils';
import { useNavbarScroll } from '@/hooks/useNavbarScroll';
import NavbarContainer from './navbar/NavbarContainer';
import NavbarLogo from './navbar/NavbarLogo';

const Navbar = () => {
  const { isScrolled, isInitialView } = useNavbarScroll();
  
  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 w-full',
      'transition-all duration-800 ease-smooth',
      isScrolled 
        ? 'bg-white/90 backdrop-blur-md shadow-md py-3' 
        : 'bg-transparent py-5'
    )}>
      {!isScrolled ? (
        <div className="flex justify-center w-full py-4">
          <NavbarLogo />
        </div>
      ) : (
        <NavbarContainer isScrolled={isScrolled} isInitialView={isInitialView} />
      )}
    </header>
  );
};

export default Navbar;
