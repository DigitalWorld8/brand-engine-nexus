
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { useNavbarScroll } from '@/hooks/useNavbarScroll';

const NavbarLogo = () => {
  const { isScrolled, hasCompletedFirstScroll } = useNavbarScroll();
  const [logoReady, setLogoReady] = useState(false);

  // Add a slight delay before animations to ensure smooth loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setLogoReady(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  // Calculate logo scale based on scroll state and first scroll completion
  const logoScale = isScrolled ? "scale-100" : 
                  hasCompletedFirstScroll ? "scale-115" : "scale-125";

  return (
    <div className={cn(
      "flex items-center transform-gpu will-change-transform", 
      "transition-all duration-1200 ease-ios", 
      logoScale,
      logoReady ? "opacity-100" : "opacity-0"
    )}>
      <a href="/" className="flex items-center space-x-1">
        <span className="text-2xl font-bold font-heading text-brand-primary">Brand<span className="text-brand-accent-blue">Engine</span></span>
      </a>
    </div>
  );
};

export default NavbarLogo;
