
import React from 'react';
import { cn } from '@/lib/utils';
import { useNavbarScroll } from '@/hooks/useNavbarScroll';
import NavbarContainer from './navbar/NavbarContainer';

const Navbar = () => {
  const { isScrolled, isInitialView } = useNavbarScroll();
  
  return (
    <header className={cn('fixed left-0 right-0 z-50 transition-all duration-500 w-[90%] mx-auto', 
      isScrolled 
        ? 'bg-white/90 backdrop-blur-md shadow-md py-3 top-0' 
        : 'bg-transparent py-5 top-16')}>
      <NavbarContainer isScrolled={isScrolled} isInitialView={isInitialView} />
    </header>
  );
};

export default Navbar;
