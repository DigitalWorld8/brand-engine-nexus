
import React from 'react';
import { cn } from '@/lib/utils';
import { useNavbarScroll } from '@/hooks/useNavbarScroll';
import NavbarContainer from './navbar/NavbarContainer';
import NavbarLogo from './navbar/NavbarLogo';
import ScrollDownIndicator from './navbar/ScrollDownIndicator';

const Navbar = () => {
  const {
    isScrolled,
    isInitialView
  } = useNavbarScroll();
  
  return (
    <header className={cn("fixed top-0 left-0 right-0 w-full z-[9999]", isScrolled ? "bg-white shadow-md" : "bg-transparent")} 
      style={{
        transition: 'background-color 0.25s cubic-bezier(0.33, 1, 0.68, 1), box-shadow 0.25s cubic-bezier(0.33, 1, 0.68, 1)',
        willChange: 'background-color, box-shadow',
        transform: 'translateZ(0)'
      }}
    >
      {/* When not scrolled, show logo center in the content container */}
      {!isScrolled ? (
        <div className="absolute top-1/2 left-0 right-0 mx-auto transform -translate-y-1/2 z-20 flex flex-col items-center justify-center" 
          style={{
            pointerEvents: 'none', // Allow clicks to pass through the container
            willChange: 'transform',
            transform: 'translateZ(0)'
          }}
        >
          <div 
            style={{
              pointerEvents: 'auto', // Re-enable pointer events for the logo itself
              willChange: 'transform, box-shadow',
              transform: 'translateZ(0)'
            }} 
            className="bg-brand-primary rounded-full shadow-lg logo-glow logo-float my-[91px] py-[17px] px-[45px] mx-0"
          >
            <div className="scale-110 text-white" 
              style={{
                transition: 'transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)',
                willChange: 'transform'
              }}
            >
              <NavbarLogo />
            </div>
          </div>
          
          {/* Add scroll down indicator below the logo */}
          <div className="mt-8 flex justify-center" 
            style={{
              pointerEvents: 'auto'
            }}
          >
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
