
import React from 'react';
import { cn } from '@/lib/utils';
import { useNavbarScroll } from '@/hooks/useNavbarScroll';
import NavbarContainer from './navbar/NavbarContainer';
import NavbarLogo from './navbar/NavbarLogo';
import BottomNavbar from './navbar/BottomNavbar';
import ScrollDownIndicator from './navbar/ScrollDownIndicator';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const {
    isScrolled,
    isInitialView
  } = useNavbarScroll();
  
  const isMobile = useIsMobile();
  
  // For mobile, render both the top logo and bottom navbar
  if (isMobile) {
    return (
      <>
        {/* Mobile top logo bar */}
        <header className="fixed top-0 left-0 right-0 z-[9999] bg-white shadow-sm py-2">
          <div className="container mx-auto flex justify-center items-center">
            <NavbarLogo />
          </div>
        </header>
        
        {/* Mobile bottom navigation */}
        <BottomNavbar />
      </>
    );
  }
  
  return (
    <header className={cn("fixed top-0 left-0 right-0 w-full z-[9999]", isScrolled ? "bg-white shadow-md" : "bg-transparent")} 
      style={{
        transition: 'background-color 0.25s cubic-bezier(0.33, 1, 0.68, 1), box-shadow 0.25s cubic-bezier(0.33, 1, 0.68, 1)',
        willChange: 'background-color, box-shadow',
        transform: 'translateZ(0)'
      }}
    >
      {/* Always show NavbarContainer on mobile, otherwise conditional */}
      {isScrolled ? (
        /* Show full navbar container */
        <NavbarContainer isScrolled={true} isInitialView={false} />
      ) : (
        /* When not scrolled on desktop, show logo center in the content container */
        <div className="absolute top-1/2 left-0 right-0 mx-auto transform -translate-y-1/2 z-20 flex flex-col items-center justify-center" 
          style={{
            pointerEvents: 'none',
            willChange: 'transform',
            transform: 'translateZ(0)'
          }}
        >
          <div 
            style={{
              pointerEvents: 'auto',
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
          
          {/* Add scroll down indicator below the logo with proper spacing */}
          <div className="mt-12 flex justify-center" 
            style={{
              pointerEvents: 'auto'
            }}
          >
            <ScrollDownIndicator />
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
