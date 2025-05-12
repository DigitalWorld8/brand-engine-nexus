
import React from 'react';
import { cn } from '@/lib/utils';
import { useNavbarScroll } from '@/hooks/useNavbarScroll';
import { Section } from 'lucide-react';

const NavbarLogo = () => {
  const { isScrolled } = useNavbarScroll();

  return (
    <div className={cn(
      "flex items-center",
      "transition-all duration-300 ease-in-out", 
      isScrolled ? "scale-95" : "scale-100", // Reduce scale when scrolled for better header fit
      "opacity-100", // Always show with full opacity
      !isScrolled ? "text-white" : "text-brand-primary" // Use white text when not scrolled (in the primary brand color area)
    )}>
      <a href="/" className="flex items-center space-x-1">
        <Section className={cn("h-6 w-6 mr-1", !isScrolled ? "text-white" : "text-brand-accent-blue")} />
        <span className="text-2xl font-bold font-heading">Brand<span className={!isScrolled ? "text-white" : "text-brand-accent-blue"}>Engine</span></span>
      </a>
    </div>
  );
};

export default NavbarLogo;
