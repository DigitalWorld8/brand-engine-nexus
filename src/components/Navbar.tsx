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
  return <header className="this has to be always sticky after scrolling ">
      {/* When not scrolled, show only logo centered */}
      {!isScrolled ? <div className="flex justify-center w-full py-4">
          <NavbarLogo />
        </div> : (/* When scrolled, show full navbar container */
    <NavbarContainer isScrolled={isScrolled} isInitialView={isInitialView} />)}
    </header>;
};
export default Navbar;