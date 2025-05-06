
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Phone, Folder, Newspaper } from 'lucide-react';
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
    <div className="rounded-l-3xl bg-white shadow-md py-4 px-6 mr-0 fixed right-0 top-1/2 transform -translate-y-1/2">
      <div className="flex flex-col space-y-4">
        {/* Right Side Nav Items */}
        <NavigationMenu>
          <NavigationMenuList className="flex flex-col space-y-2">
            {/* Services with custom toggle behavior */}
            <NavigationMenuItem>
              <button 
                onClick={handleServicesClick}
                className={`text-brand-text hover:text-brand-primary font-medium transition-colors px-3 py-2 flex items-center ${servicesOpen ? 'text-brand-primary' : ''}`}
                aria-expanded={servicesOpen}
              >
                <Folder className="mr-1 h-4 w-4" />
                <span>Services</span>
                <svg 
                  className={`ml-1 h-3 w-3 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} 
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
              <NavigationMenuLink href="#blog" className="text-brand-text hover:text-brand-primary font-medium transition-colors px-3 py-2 flex items-center">
                <Newspaper className="mr-1 h-4 w-4" />
                <span>Blog</span>
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
    </div>
  );
};

export default RightNavigation;
