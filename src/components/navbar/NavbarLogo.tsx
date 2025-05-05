
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { useNavbarScroll } from '@/hooks/useNavbarScroll';

const NavbarLogo = () => {
  const { isScrolled } = useNavbarScroll();
  const [logoReady, setLogoReady] = useState(false);

  // Add a slight delay before animations to ensure smooth loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setLogoReady(true);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={cn(
      "flex items-center transform-gpu will-change-transform", 
      "transition-all duration-800 ease-in-out", 
      isScrolled ? "scale-100" : "scale-125",
      logoReady ? "opacity-100" : "opacity-0"
    )}>
      <a href="/" className="flex items-center">
        <img 
          src="/lovable-uploads/a83efaae-4e9a-445e-b969-2cd36982edc5.png" 
          alt="BrandEngine Logo" 
          className={cn(
            "h-8 transition-all duration-800 ease-in-out",
            isScrolled ? "h-8" : "h-10"
          )} 
        />
      </a>
    </div>
  );
};

export default NavbarLogo;
