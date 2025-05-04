
import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink
} from "@/components/ui/navigation-menu";
import ServicesMegaMenu from './ServicesMegaMenu';

const RightNavigation = () => {
  return (
    <div className="flex-1 flex items-center justify-end space-x-4">
      {/* Right Side Nav Items */}
      <div className="flex items-center">
        <NavigationMenu className="hidden md:block">
          <NavigationMenuList>
            <ServicesMegaMenu />
            
            <NavigationMenuItem>
              <NavigationMenuLink 
                href="#blog" 
                className="text-brand-text hover:text-brand-primary font-medium transition-colors px-3 py-2"
              >
                Blog
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      
      {/* Right Side CTA Button */}
      <Button 
        size="sm" 
        className="bg-[#0EA5E9] hover:bg-[#0EA5E9]/90 transition-colors rounded-full"
      >
        <Phone className="mr-1 h-4 w-4" />
        <span className="hidden sm:inline">Contact Us</span>
      </Button>
    </div>
  );
};

export default RightNavigation;
