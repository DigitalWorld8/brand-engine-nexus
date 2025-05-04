
import React, { useState } from 'react';
import {
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";

const ServicesMegaMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger 
        className="text-brand-text hover:text-brand-primary font-medium transition-colors"
        onClick={toggleMenu}
        data-state={isOpen ? 'open' : 'closed'}
      >
        Services
      </NavigationMenuTrigger>
      <NavigationMenuContent className={cn(
        "absolute left-1/2 transform -translate-x-1/2 transition-all duration-300",
        isOpen ? "opacity-100" : "opacity-0"
      )}>
        <div className="relative w-screen max-w-6xl bg-gradient-to-r from-[#e9f8fd] via-[#f0fafd] to-[#e9f8fd] p-6 grid grid-cols-3 gap-8 text-left rounded-xl shadow-xl overflow-hidden">
          {/* Animated gradient border */}
          <div className="absolute inset-0 p-[2px] rounded-xl pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-r from-brand-accent-blue via-brand-primary to-brand-accent-violet animate-gradient-x"></div>
          </div>
          
          {/* Digital Services - First */}
          <div className="service-category z-10">
            <h3 className="text-lg font-semibold mb-4 text-[#1b1464] flex items-center">
              <span className="inline-block w-4 h-4 bg-[#1b1464] rounded-sm mr-2"></span>
              Digital Services
            </h3>
            
            <div className="mb-5">
              <h4 className="font-medium mb-2 text-[#1b1464]">AI Solutions</h4>
              <ul className="space-y-2">
                <li className="text-sm pl-4 py-2 bg-white hover:bg-[#e5e7ff] rounded transition-all cursor-pointer group flex items-center justify-between">
                  <span>AI Chat Agents</span>
                  <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 text-[#1b1464] transition-opacity" />
                </li>
                <li className="text-sm pl-4 py-2 bg-white hover:bg-[#e5e7ff] rounded transition-all cursor-pointer group flex items-center justify-between">
                  <span>Persona Bots & Lead Capture</span>
                  <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 text-[#1b1464] transition-opacity" />
                </li>
                <li className="text-sm pl-4 py-2 bg-white hover:bg-[#e5e7ff] rounded transition-all cursor-pointer group flex items-center justify-between">
                  <span>Multilingual Flows</span>
                  <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 text-[#1b1464] transition-opacity" />
                </li>
              </ul>
            </div>
            
            <div className="mb-5">
              <h4 className="font-medium mb-2 text-[#1b1464]">Digital Transformation</h4>
              <ul className="space-y-2">
                <li className="text-sm pl-4 py-2 bg-white hover:bg-[#e5e7ff] rounded transition-all cursor-pointer group flex items-center justify-between">
                  <span>Website Design</span>
                  <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 text-[#1b1464] transition-opacity" />
                </li>
                <li className="text-sm pl-4 py-2 bg-white hover:bg-[#e5e7ff] rounded transition-all cursor-pointer group flex items-center justify-between">
                  <span>E-Commerce Development</span>
                  <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 text-[#1b1464] transition-opacity" />
                </li>
                <li className="text-sm pl-4 py-2 bg-white hover:bg-[#e5e7ff] rounded transition-all cursor-pointer group flex items-center justify-between">
                  <span>Multilingual Site Setup</span>
                  <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 text-[#1b1464] transition-opacity" />
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-2 text-[#1b1464]">Digital Automation</h4>
              <ul className="space-y-2">
                <li className="text-sm pl-4 py-2 bg-white hover:bg-[#e5e7ff] rounded transition-all cursor-pointer group flex items-center justify-between">
                  <span>Smart Booking Systems</span>
                  <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 text-[#1b1464] transition-opacity" />
                </li>
                <li className="text-sm pl-4 py-2 bg-white hover:bg-[#e5e7ff] rounded transition-all cursor-pointer group flex items-center justify-between">
                  <span>CRM + Loyalty Deployment</span>
                  <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 text-[#1b1464] transition-opacity" />
                </li>
                <li className="text-sm pl-4 py-2 bg-white hover:bg-[#e5e7ff] rounded transition-all cursor-pointer group flex items-center justify-between">
                  <span>Workflow Automation</span>
                  <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 text-[#1b1464] transition-opacity" />
                </li>
              </ul>
            </div>
          </div>
          
          {/* Digital Marketing - Second */}
          <div className="service-category z-10">
            <h3 className="text-lg font-semibold mb-4 text-[#596ae9] flex items-center">
              <span className="inline-block w-4 h-4 bg-[#596ae9] rounded-sm mr-2"></span>
              Digital Marketing
            </h3>
            <ul className="space-y-2">
              <li className="mega-menu-item bg-white hover:bg-[#eaedff] rounded transition-all cursor-pointer group p-3">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-[#596ae9]">Search Engine Optimization</span>
                  <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 text-[#596ae9] transition-opacity" />
                </div>
                <span className="text-sm text-gray-500 block">Improve search visibility</span>
              </li>
              <li className="mega-menu-item bg-white hover:bg-[#eaedff] rounded transition-all cursor-pointer group p-3">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-[#596ae9]">Web Content Writing</span>
                  <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 text-[#596ae9] transition-opacity" />
                </div>
                <span className="text-sm text-gray-500 block">Engaging website copy</span>
              </li>
              <li className="mega-menu-item bg-white hover:bg-[#eaedff] rounded transition-all cursor-pointer group p-3">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-[#596ae9]">Blogging Services</span>
                  <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 text-[#596ae9] transition-opacity" />
                </div>
                <span className="text-sm text-gray-500 block">English + Arabic blog posts</span>
              </li>
              <li className="mega-menu-item bg-white hover:bg-[#eaedff] rounded transition-all cursor-pointer group p-3">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-[#596ae9]">Email Marketing</span>
                  <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 text-[#596ae9] transition-opacity" />
                </div>
                <span className="text-sm text-gray-500 block">Targeted email campaigns</span>
              </li>
              <li className="mega-menu-item bg-white hover:bg-[#eaedff] rounded transition-all cursor-pointer group p-3">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-[#596ae9]">Social Media Strategy</span>
                  <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 text-[#596ae9] transition-opacity" />
                </div>
                <span className="text-sm text-gray-500 block">Content calendars & planning</span>
              </li>
              <li className="mega-menu-item bg-white hover:bg-[#eaedff] rounded transition-all cursor-pointer group p-3">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-[#596ae9]">Analytics & Reporting</span>
                  <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 text-[#596ae9] transition-opacity" />
                </div>
                <span className="text-sm text-gray-500 block">Performance tracking</span>
              </li>
            </ul>
          </div>
          
          {/* Design & Branding - Third */}
          <div className="service-category z-10">
            <h3 className="text-lg font-semibold mb-4 text-[#09a4d5] flex items-center">
              <span className="inline-block w-4 h-4 bg-[#09a4d5] rounded-sm mr-2"></span>
              Design & Branding
            </h3>
            <ul className="space-y-2">
              <li className="mega-menu-item bg-white hover:bg-[#e5f7fd] rounded transition-all cursor-pointer group p-3">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-[#09a4d5]">Brand Identity Design</span>
                  <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 text-[#09a4d5] transition-opacity" />
                </div>
                <span className="text-sm text-gray-500 block">Visual identity that communicates trust</span>
              </li>
              <li className="mega-menu-item bg-white hover:bg-[#e5f7fd] rounded transition-all cursor-pointer group p-3">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-[#09a4d5]">Logo Design</span>
                  <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 text-[#09a4d5] transition-opacity" />
                </div>
                <span className="text-sm text-gray-500 block">English + Arabic logos</span>
              </li>
              <li className="mega-menu-item bg-white hover:bg-[#e5f7fd] rounded transition-all cursor-pointer group p-3">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-[#09a4d5]">Social Media Visuals</span>
                  <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 text-[#09a4d5] transition-opacity" />
                </div>
                <span className="text-sm text-gray-500 block">Eye-catching social graphics</span>
              </li>
              <li className="mega-menu-item bg-white hover:bg-[#e5f7fd] rounded transition-all cursor-pointer group p-3">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-[#09a4d5]">Business Stationery</span>
                  <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 text-[#09a4d5] transition-opacity" />
                </div>
                <span className="text-sm text-gray-500 block">Cards, letterheads & more</span>
              </li>
              <li className="mega-menu-item bg-white hover:bg-[#e5f7fd] rounded transition-all cursor-pointer group p-3">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-[#09a4d5]">Brand Guidelines</span>
                  <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 text-[#09a4d5] transition-opacity" />
                </div>
                <span className="text-sm text-gray-500 block">Comprehensive brand rules</span>
              </li>
              <li className="mega-menu-item bg-white hover:bg-[#e5f7fd] rounded transition-all cursor-pointer group p-3">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-[#09a4d5]">Rebranding</span>
                  <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 text-[#09a4d5] transition-opacity" />
                </div>
                <span className="text-sm text-gray-500 block">Refresh your brand identity</span>
              </li>
            </ul>
          </div>
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};

export default ServicesMegaMenu;
