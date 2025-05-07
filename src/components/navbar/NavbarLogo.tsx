
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { useNavbarScroll } from '@/hooks/useNavbarScroll';
import { Section } from 'lucide-react';

const NavbarLogo = () => {
  const { isScrolled } = useNavbarScroll();
  const [logoReady, setLogoReady] = useState(false);

  // Add a slight delay before animations to ensure smooth loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setLogoReady(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={cn(
      "flex items-center",
      "transition-all duration-300 ease-in-out", 
      isScrolled ? "scale-100" : "scale-100", // Keep the scale consistent for better visibility
      logoReady ? "opacity-100" : "opacity-0",
      !isScrolled ? "text-white" : "text-brand-primary" // Use white text when not scrolled (in the primary brand color area)
    )}>
      <a href="/" className="flex items-center space-x-1">
        <Section className={cn("h-7 w-7 mr-1", !isScrolled ? "text-white" : "text-brand-accent-blue")} /> {/* Increased icon size */}
        <span className="text-2xl font-bold font-heading">Brand<span className={!isScrolled ? "text-white" : "text-brand-accent-blue"}>Engine</span></span>
      </a>
    </div>
  );
};

export default NavbarLogo;
