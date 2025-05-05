
import React from 'react';
import { cn } from '@/lib/utils';
import { useNavbarScroll } from '@/hooks/useNavbarScroll';
import NavbarContainer from './navbar/NavbarContainer';

const Navbar = () => {
  const { isScrolled } = useNavbarScroll();
  
  return (
    <header className={cn('fixed top-0 left-0 right-0 z-50 transition-all duration-300', 
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5')}>
      <NavbarContainer isScrolled={isScrolled} />
    </header>
  );
};

export default Navbar;
