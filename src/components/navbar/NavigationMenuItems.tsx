
import React from 'react';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ServicesDropdownTrigger from './ServicesDropdownTrigger';
import ServicesDropdownContent from './ServicesDropdownContent';

interface NavigationMenuItemsProps {
  servicesOpen: boolean;
}

const NavigationMenuItems = ({ servicesOpen }: NavigationMenuItemsProps) => {
  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList>
        {/* Services with horizontal dropdown menu */}
        <NavigationMenuItem className="relative">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <ServicesDropdownTrigger servicesOpen={servicesOpen} />
            </DropdownMenuTrigger>
            <DropdownMenuContent 
              align="center" 
              side="bottom"
              className="w-[900px] p-6 bg-white shadow-lg border z-50"
              sideOffset={8}
            >
              <ServicesDropdownContent />
            </DropdownMenuContent>
          </DropdownMenu>
        </NavigationMenuItem>
        
        <NavigationMenuItem>
          <NavigationMenuLink href="#blog" className="group px-4 py-3 text-base font-medium text-brand-text hover:text-brand-primary transition-colors relative">
            Blog
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavigationMenuItems;
