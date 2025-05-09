
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Phone, Sparkles } from 'lucide-react';
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
              className={`
                relative group overflow-hidden px-5 py-3 flex items-center
                ${servicesOpen 
                  ? 'bg-gradient-to-r from-[#e9f8fd] via-[#f0fafd] to-[#e9f8fd] text-brand-primary rounded-t-lg shadow-sm' 
                  : 'text-brand-text hover:text-brand-primary'}
                font-medium transition-all duration-300 text-base
              `}
              aria-expanded={servicesOpen}
            >
              <Sparkles 
                className={`mr-2 h-4 w-4 ${servicesOpen ? 'animate-pulse text-brand-primary' : 'text-brand-accent-blue'}`} 
              />
              <span className="relative z-10">Services</span>
              
              {/* Animated arrow indicator */}
              <svg 
                className={`ml-2 h-4 w-4 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M19 9l-7 7-7-7" 
                />
              </svg>
              
              {/* Gradient background effect that shows on hover */}
              {!servicesOpen && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-brand-accent-blue via-brand-primary to-brand-accent-violet transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              )}
            </button>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <NavigationMenuLink href="#blog" className="text-brand-text hover:text-brand-primary font-medium transition-colors px-4 py-3 text-base">
              Blog
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      
      {/* Right Side CTA Button */}
      <Button size="sm" className="bg-brand-accent-blue hover:bg-brand-primary text-white transition-colors py-5 px-6">
        <Phone className="mr-2 h-5 w-5" />
        <span className="hidden sm:inline text-base">Contact Us</span>
      </Button>
    </div>
  );
};

export default RightNavigation;
