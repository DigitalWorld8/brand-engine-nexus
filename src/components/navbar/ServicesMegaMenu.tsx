
import React, { useState } from 'react';
import {
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import ServiceMenuGrid from './menu-categories/ServiceMenuGrid';

const ServicesMegaMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // This ensures the popup is properly managed via the main nav
  // The main dropdown is now managed by ServicesMegaOverlay

  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger 
        className="text-brand-text hover:text-brand-primary font-medium transition-colors"
        onClick={toggleMenu}
        data-state={isOpen ? 'open' : 'closed'}
      >
        Services
      </NavigationMenuTrigger>
      <NavigationMenuContent className={cn(
        "absolute left-1/2 transform -translate-x-1/2 transition-all duration-300",
        isOpen ? "opacity-100" : "opacity-0"
      )}>
        <ServiceMenuGrid />
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};

export default ServicesMegaMenu;
