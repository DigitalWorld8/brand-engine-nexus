
import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink
} from "@/components/ui/navigation-menu";

const LeftNavigation = () => {
  return (
    <div className="rounded-r-3xl bg-white shadow-md py-4 px-6 ml-0 fixed left-0 top-1/2 transform -translate-y-1/2">
      <div className="flex flex-col space-y-4">
        {/* Left Side CTA Button */}
        <Button size="sm" variant="outline" className="flex items-center border-brand-accent-blue text-brand-accent-blue hover:bg-brand-accent-blue/10">
          <Calendar className="mr-1 h-4 w-4" />
          <span className="hidden xl:inline">Quick Schedule</span>
        </Button>
        
        {/* Left Side Nav Items */}
        <NavigationMenu>
          <NavigationMenuList className="flex flex-col space-y-2">
            <NavigationMenuItem>
              <NavigationMenuLink href="#about" className="text-brand-text hover:text-brand-primary font-medium transition-colors px-3 py-2">
                About Us
              </NavigationMenuLink>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <NavigationMenuLink href="#portfolio" className="text-brand-text hover:text-brand-primary font-medium transition-colors px-3 py-2">
                Portfolio
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
};

export default LeftNavigation;
