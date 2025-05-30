
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
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Code, Globe, Palette, ChevronRight } from 'lucide-react';
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
          {/* Services with vertical dropdown menu */}
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
              <DropdownMenuContent align="center" className="w-[400px] p-6 bg-white shadow-lg border">
                {/* Digital Services Group */}
                <DropdownMenuGroup>
                  <div className="mb-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-gradient-to-r from-[#1b1464] to-[#3a2b9e] w-10 h-10 rounded-lg flex items-center justify-center">
                        <Code className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#1b1464]">Digital Services</h3>
                        <p className="text-xs text-gray-500">Web applications, automation & AI</p>
                      </div>
                    </div>
                    
                    <div className="ml-13 space-y-1">
                      <div className="text-sm py-2 px-3 hover:bg-gray-50 rounded transition-colors cursor-pointer group flex items-center justify-between">
                        <span>AI Solutions</span>
                        <ChevronRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <div className="text-sm py-2 px-3 hover:bg-gray-50 rounded transition-colors cursor-pointer group flex items-center justify-between">
                        <span>Digital Transformation</span>
                        <ChevronRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <div className="text-sm py-2 px-3 hover:bg-gray-50 rounded transition-colors cursor-pointer group flex items-center justify-between">
                        <span>Digital Automation</span>
                        <ChevronRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <div className="text-sm py-2 px-3 hover:bg-gray-50 rounded transition-colors cursor-pointer group flex items-center justify-between">
                        <span>Custom Web Applications</span>
                        <ChevronRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </div>
                  </div>
                </DropdownMenuGroup>

                <DropdownMenuSeparator className="my-4" />

                {/* Digital Marketing Group */}
                <DropdownMenuGroup>
                  <div className="mb-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-gradient-to-r from-[#596ae9] to-[#7986f1] w-10 h-10 rounded-lg flex items-center justify-center">
                        <Globe className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#596ae9]">Digital Marketing</h3>
                        <p className="text-xs text-gray-500">SEO, content & social media</p>
                      </div>
                    </div>
                    
                    <div className="ml-13 space-y-1">
                      <div className="text-sm py-2 px-3 hover:bg-gray-50 rounded transition-colors cursor-pointer group flex items-center justify-between">
                        <span>Search Engine Optimization</span>
                        <ChevronRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <div className="text-sm py-2 px-3 hover:bg-gray-50 rounded transition-colors cursor-pointer group flex items-center justify-between">
                        <span>Web Content Writing</span>
                        <ChevronRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <div className="text-sm py-2 px-3 hover:bg-gray-50 rounded transition-colors cursor-pointer group flex items-center justify-between">
                        <span>Blogging (English + Arabic)</span>
                        <ChevronRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <div className="text-sm py-2 px-3 hover:bg-gray-50 rounded transition-colors cursor-pointer group flex items-center justify-between">
                        <span>Email Marketing</span>
                        <ChevronRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <div className="text-sm py-2 px-3 hover:bg-gray-50 rounded transition-colors cursor-pointer group flex items-center justify-between">
                        <span>Social Media Strategy</span>
                        <ChevronRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </div>
                  </div>
                </DropdownMenuGroup>

                <DropdownMenuSeparator className="my-4" />

                {/* Design & Branding Group */}
                <DropdownMenuGroup>
                  <div className="mb-4">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-gradient-to-r from-[#09a4d5] to-[#35bde8] w-10 h-10 rounded-lg flex items-center justify-center">
                        <Palette className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#09a4d5]">Design & Branding</h3>
                        <p className="text-xs text-gray-500">Logos, identity & visual systems</p>
                      </div>
                    </div>
                    
                    <div className="ml-13 space-y-1">
                      <div className="text-sm py-2 px-3 hover:bg-gray-50 rounded transition-colors cursor-pointer group flex items-center justify-between">
                        <span>Brand Identity Design</span>
                        <ChevronRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <div className="text-sm py-2 px-3 hover:bg-gray-50 rounded transition-colors cursor-pointer group flex items-center justify-between">
                        <span>Logo Design (English + Arabic)</span>
                        <ChevronRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <div className="text-sm py-2 px-3 hover:bg-gray-50 rounded transition-colors cursor-pointer group flex items-center justify-between">
                        <span>Social Media Visuals</span>
                        <ChevronRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <div className="text-sm py-2 px-3 hover:bg-gray-50 rounded transition-colors cursor-pointer group flex items-center justify-between">
                        <span>Business Cards & Stationery</span>
                        <ChevronRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <div className="text-sm py-2 px-3 hover:bg-gray-50 rounded transition-colors cursor-pointer group flex items-center justify-between">
                        <span>Brand Guidelines</span>
                        <ChevronRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </div>
                  </div>
                </DropdownMenuGroup>
                
                <DropdownMenuSeparator className="my-4" />
                
                <div className="pt-2">
                  <DropdownMenuItem asChild>
                    <a href="#services" className="flex justify-center w-full text-brand-primary font-medium cursor-pointer py-2">
                      View All Services
                    </a>
                  </DropdownMenuItem>
                </div>
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
