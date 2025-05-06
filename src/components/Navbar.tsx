
import React from 'react';
import { cn } from '@/lib/utils';
import { useNavbarScroll } from '@/hooks/useNavbarScroll';
import NavbarContainer from './navbar/NavbarContainer';

const Navbar = () => {
  const { isScrolled, isInitialView } = useNavbarScroll();
  
  return (
    <header className={cn(
      'z-50 will-change-transform transform-gpu',
      'transition-all duration-800 ease-smooth', 
      isScrolled 
        ? 'fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md shadow-md py-3 w-full' 
        : 'fixed bg-transparent py-5 top-16 left-0 right-0 w-full'
    )}>
      <NavbarContainer isScrolled={isScrolled} isInitialView={isInitialView} />
    </header>
  );
};

export default Navbar;
