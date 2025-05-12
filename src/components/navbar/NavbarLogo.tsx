
import React from 'react';
import { cn } from '@/lib/utils';
import { useNavbarScroll } from '@/hooks/useNavbarScroll';
import { Section } from 'lucide-react';

const NavbarLogo = () => {
  const { isScrolled, scrollDirection } = useNavbarScroll();

  // Apply different animation classes based on scroll direction
  const getAnimationClasses = () => {
    if (scrollDirection === 'up' && !isScrolled) {
      return 'logo-appear';
    }
    return '';
  };

  return (
    <div className={cn(
      "flex items-center",
      "transition-all duration-200 ease-smooth", 
      isScrolled ? "scale-95" : "scale-100", 
      "opacity-100", 
      !isScrolled ? "text-white" : "text-brand-primary",
      getAnimationClasses()
    )}>
      <a href="/" className="flex items-center space-x-1">
        <Section 
          className={cn(
            "h-6 w-6 mr-1 transform-gpu", 
            !isScrolled ? "text-white" : "text-brand-accent-blue",
            scrollDirection === 'up' ? "immediate-transition" : ""
          )} 
        />
        <span 
          className={cn(
            "text-2xl font-bold font-heading transform-gpu",
            scrollDirection === 'up' ? "immediate-transition" : ""
          )}
        >
          Brand<span className={!isScrolled ? "text-white" : "text-brand-accent-blue"}>Engine</span>
        </span>
      </a>
    </div>
  );
};

export default NavbarLogo;
