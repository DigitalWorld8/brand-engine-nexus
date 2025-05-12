
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Phone, Sparkles } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Code, Globe, Palette } from 'lucide-react';
import { cn } from '@/lib/utils';

interface RightNavigationProps {
  onServicesToggle?: (isOpen: boolean) => void;
  servicesOpen?: boolean;
}

const RightNavigation = ({ onServicesToggle, servicesOpen: externalServicesState }: RightNavigationProps) => {
  const [servicesOpen, setServicesOpen] = useState(false);
  
  // Sync internal state with parent state
  useEffect(() => {
    if (externalServicesState !== undefined) {
      setServicesOpen(externalServicesState);
    }
  }, [externalServicesState]);

  return (
    <div className="flex-1 flex items-center justify-end space-x-4">
      {/* Right Side Nav Items */}
      <NavigationMenu className="hidden md:flex">
        <NavigationMenuList>
          {/* Services with dropdown menu */}
          <NavigationMenuItem className="relative">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button 
                  className={`
                    group overflow-hidden px-5 py-3 flex items-center
                    ${servicesOpen 
                      ? 'text-brand-primary' 
                      : 'text-brand-text hover:text-brand-primary'}
                    font-medium transition-all duration-300 text-base
                  `}
                >
                  <Sparkles 
                    className={`mr-2 h-4 w-4 ${servicesOpen ? 'text-brand-primary' : 'text-brand-accent-blue'}`} 
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
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="w-[350px] p-4">
                <DropdownMenuGroup>
                  <div className="grid grid-cols-1 gap-3">
                    <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="bg-gradient-to-r from-[#1b1464] to-[#3a2b9e] w-10 h-10 rounded-lg flex items-center justify-center">
                        <Code className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-medium">Digital Services</h3>
                        <p className="text-xs text-gray-500">Web applications, automation & more</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="bg-gradient-to-r from-[#596ae9] to-[#7986f1] w-10 h-10 rounded-lg flex items-center justify-center">
                        <Globe className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-medium">Digital Marketing</h3>
                        <p className="text-xs text-gray-500">SEO, content & social media</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="bg-gradient-to-r from-[#09a4d5] to-[#35bde8] w-10 h-10 rounded-lg flex items-center justify-center">
                        <Palette className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-medium">Design & Branding</h3>
                        <p className="text-xs text-gray-500">Logos, identity & visual systems</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-3 pt-3 border-t">
                    <DropdownMenuItem asChild>
                      <a href="#services" className="flex justify-center w-full text-brand-primary font-medium cursor-pointer">
                        View All Services
                      </a>
                    </DropdownMenuItem>
                  </div>
                </DropdownMenuGroup>
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
      
      {/* Right Side CTA Button */}
      <Button size="sm" className="bg-brand-accent-blue hover:bg-brand-primary text-white transition-colors py-5 px-6">
        <Phone className="mr-2 h-5 w-5" />
        <span className="hidden sm:inline text-base">Contact Us</span>
      </Button>
    </div>
  );
};

export default RightNavigation;
