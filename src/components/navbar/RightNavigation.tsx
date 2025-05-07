
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
              className={`text-brand-text hover:text-brand-primary font-medium transition-colors px-4 py-3 flex items-center text-base ${servicesOpen ? 'text-brand-primary' : ''}`} {/* Increased padding and text size */}
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
            <NavigationMenuLink href="#blog" className="text-brand-text hover:text-brand-primary font-medium transition-colors px-4 py-3 text-base"> {/* Increased padding and text size */}
              Blog
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      
      {/* Right Side CTA Button */}
      <Button size="sm" className="bg-brand-accent-blue hover:bg-brand-primary text-white transition-colors py-5"> {/* Increased button height with py-5 */}
        <Phone className="mr-1 h-5 w-5" /> {/* Increased icon size */}
        <span className="hidden sm:inline text-base">Contact Us</span> {/* Increased text size */}
      </Button>
    </div>
  );
};

export default RightNavigation;
