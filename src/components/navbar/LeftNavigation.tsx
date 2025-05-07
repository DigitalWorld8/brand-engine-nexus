
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
    <div className="flex-1 flex items-center justify-start space-x-4">
      {/* Left Side CTA Button */}
      <Button size="sm" variant="outline" className="hidden lg:flex items-center border-brand-accent-blue text-brand-accent-blue hover:bg-brand-accent-blue/10 py-5"> {/* Increased button height with py-5 */}
        <Calendar className="mr-1 h-5 w-5" /> {/* Increased icon size */}
        <span className="hidden xl:inline text-base">Quick Schedule</span> {/* Increased text size */}
      </Button>
      
      {/* Left Side Nav Items */}
      <NavigationMenu className="hidden md:flex">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink href="#about" className="text-brand-text hover:text-brand-primary font-medium transition-colors px-4 py-3 text-base"> {/* Increased padding and text size */}
              About Us
            </NavigationMenuLink>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <NavigationMenuLink href="#portfolio" className="text-brand-text hover:text-brand-primary font-medium transition-colors px-4 py-3 text-base"> {/* Increased padding and text size */}
              Portfolio
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default LeftNavigation;
