
import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink
} from "@/components/ui/navigation-menu";

interface LeftNavigationProps {
  isMorphed?: boolean;
}

const LeftNavigation = ({ isMorphed = false }: LeftNavigationProps) => {
  return (
    <div className={cn(
      "flex-1 flex items-center justify-start",
      isMorphed ? "flex-col space-y-4" : "space-x-4"
    )}>
      {/* Left Side CTA Button */}
      <Button 
        size="sm" 
        variant="outline" 
        className={cn(
          "hidden lg:flex items-center border-brand-accent-blue text-brand-accent-blue hover:bg-brand-accent-blue/10",
          isMorphed && "morph-element flex-col py-3 px-4"
        )}
      >
        <Calendar className={cn("h-5 w-5", isMorphed && "mb-2")} />
        <span className={cn(
          isMorphed ? "block text-xs font-medium" : "hidden xl:inline"
        )}>
          {isMorphed ? "Schedule" : "Quick Schedule"}
        </span>
      </Button>
      
      {/* Left Side Nav Items */}
      <NavigationMenu className={cn(
        "hidden md:flex",
        isMorphed && "morph-nav-menu"
      )}>
        <NavigationMenuList className={cn(
          isMorphed && "flex-col items-center gap-3"
        )}>
          <NavigationMenuItem>
            <NavigationMenuLink href="#about" className={cn(
              "text-brand-text hover:text-brand-primary font-medium transition-colors px-3 py-2 text-center block",
              isMorphed && "hover:bg-brand-primary/5 rounded-lg"
            )}>
              About Us
            </NavigationMenuLink>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <NavigationMenuLink href="#portfolio" className={cn(
              "text-brand-text hover:text-brand-primary font-medium transition-colors px-3 py-2 text-center block",
              isMorphed && "hover:bg-brand-primary/5 rounded-lg"
            )}>
              Portfolio
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default LeftNavigation;
