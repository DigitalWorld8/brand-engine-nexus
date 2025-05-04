
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink
} from "@/components/ui/navigation-menu";

interface RightNavigationProps {
  onServicesToggle?: (isOpen: boolean) => void;
}

const RightNavigation = ({ onServicesToggle }: RightNavigationProps) => {
  const [servicesOpen, setServicesOpen] = useState(false);

  const handleServicesClick = () => {
    const newState = !servicesOpen;
    setServicesOpen(newState);
    if (onServicesToggle) {
      onServicesToggle(newState);
    }
  };

  return (
    <div className="flex-1 flex items-center justify-end space-x-4">
      {/* Right Side Nav Items */}
      <NavigationMenu className="hidden md:flex">
        <NavigationMenuList>
          {/* Services with custom toggle behavior */}
          <NavigationMenuItem>
            <button 
              onClick={handleServicesClick}
              className={`text-brand-text hover:text-brand-primary font-medium transition-colors px-3 py-2 flex items-center ${servicesOpen ? 'text-brand-primary' : ''}`}
              aria-expanded={servicesOpen}
            >
              Services
              <svg 
                className={`ml-1 h-4 w-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} 
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
            <NavigationMenuLink href="#blog" className="text-brand-text hover:text-brand-primary font-medium transition-colors px-3 py-2">
              Blog
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      
      {/* Right Side CTA Button */}
      <Button size="sm" className="bg-brand-accent-blue hover:bg-brand-primary text-white transition-colors">
        <Phone className="mr-1 h-4 w-4" />
        <span className="hidden sm:inline">Contact Us</span>
      </Button>
    </div>
  );
};

export default RightNavigation;
