
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
      "flex items-center",
      "transition-all duration-500 ease-in-out", 
      isScrolled ? "scale-100" : "scale-125",
      logoReady ? "opacity-100" : "opacity-0"
    )}>
      <a href="/" className="flex items-center space-x-1">
        <span className="text-2xl font-bold font-heading text-brand-primary">Brand<span className="text-brand-accent-blue">Engine</span></span>
      </a>
    </div>
  );
};

export default NavbarLogo;
