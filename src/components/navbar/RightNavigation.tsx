
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink
} from "@/components/ui/navigation-menu";

interface RightNavigationProps {
  onServicesToggle?: (isOpen: boolean) => void;
  isMorphed?: boolean;
}

const RightNavigation = ({ onServicesToggle, isMorphed = false }: RightNavigationProps) => {
  const [servicesOpen, setServicesOpen] = useState(false);

  const handleServicesClick = () => {
    const newState = !servicesOpen;
    setServicesOpen(newState);
    if (onServicesToggle) {
      onServicesToggle(newState);
    }
  };

  return (
    <div className={cn(
      "flex-1 flex items-center justify-end",
      isMorphed ? "flex-col space-y-4" : "space-x-4"
    )}>
      {/* Right Side Nav Items */}
      <NavigationMenu className={cn(
        "hidden md:flex",
        isMorphed && "morph-nav-menu"
      )}>
        <NavigationMenuList className={cn(
          isMorphed && "flex-col items-center gap-3"
        )}>
          {/* Services with custom toggle behavior */}
          <NavigationMenuItem>
            <button 
              onClick={handleServicesClick}
              className={cn(
                "text-brand-text hover:text-brand-primary font-medium transition-colors px-4 py-3 flex items-center text-base",
                servicesOpen && "text-brand-primary",
                isMorphed && "flex-col hover:bg-brand-primary/5 rounded-lg"
              )}
              aria-expanded={servicesOpen}
            >
              Services
              <svg 
                className={cn(
                  isMorphed ? "mt-1 h-4 w-4" : "ml-1 h-4 w-4", 
                  "transition-transform",
                  servicesOpen ? "rotate-180" : ""
                )}
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <NavigationMenuLink href="#blog" className={cn(
              "text-brand-text hover:text-brand-primary font-medium transition-colors px-4 py-3 text-base text-center block",
              isMorphed && "hover:bg-brand-primary/5 rounded-lg"
            )}>
              Blog
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      
      {/* Right Side CTA Button */}
      <Button 
        size="sm" 
        className={cn(
          "bg-brand-accent-blue hover:bg-brand-primary text-white transition-colors",
          isMorphed ? "py-3 px-4 flex-col morph-element" : "py-5 px-6"
        )}
      >
        <Phone className={cn("h-5 w-5", isMorphed ? "mb-2" : "mr-2")} />
        <span className={cn(
          isMorphed ? "block text-xs font-medium" : "hidden sm:inline text-base"
        )}>
          {isMorphed ? "Contact" : "Contact Us"}
        </span>
      </Button>
    </div>
  );
};

export default RightNavigation;
