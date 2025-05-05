
import React from 'react';
import { cn } from '@/lib/utils';
import { useNavbarScroll } from '@/hooks/useNavbarScroll';

const NavbarLogo = () => {
  const { isScrolled } = useNavbarScroll();

  return (
    <div className={cn("flex items-center transition-all duration-700", 
      !isScrolled && "scale-125"
    )}>
      <a href="/" className="flex items-center space-x-1">
        <span className="text-2xl font-bold font-heading text-brand-primary">Brand<span className="text-brand-accent-blue">Engine</span></span>
      </a>
    </div>
  );
};

export default NavbarLogo;
