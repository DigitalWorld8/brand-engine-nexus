
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink
} from "@/components/ui/navigation-menu";
import ServicesMegaMenu from './ServicesMegaMenu';

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
          {/* Services with custom ServicesMegaMenu component */}
          <ServicesMegaMenu />
          
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
