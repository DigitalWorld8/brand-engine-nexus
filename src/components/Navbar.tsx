
import React from 'react';
import { cn } from '@/lib/utils';
import { useNavbarScroll } from '@/hooks/useNavbarScroll';
import NavbarContainer from './navbar/NavbarContainer';
import NavbarLogo from './navbar/NavbarLogo';
import ScrollDownIndicator from './ScrollDownIndicator';

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
      {/* When not scrolled, show logo absolutely positioned in the primary brand color area */}
      {!isScrolled ? (
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 z-20">
          <div className="bg-brand-primary py-4 px-6 rounded-full shadow-lg logo-glow logo-float">
            <div className="scale-110 transition-all duration-300 text-white">
              <NavbarLogo />
            </div>
          </div>
          
          {/* Add scroll down indicator below the logo */}
          <div className="mt-4 flex justify-center">
            <ScrollDownIndicator />
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
