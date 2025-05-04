
import React, { useState } from 'react';
import {
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

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
        <div className="relative w-screen max-w-6xl bg-brand-light-blue p-6 grid grid-cols-3 gap-8 text-left rounded-xl shadow-xl overflow-hidden">
          {/* Animated gradient border */}
          <div className="absolute inset-0 p-[2px] rounded-xl pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-r from-brand-accent-blue via-brand-primary to-brand-accent-violet animate-gradient-x"></div>
          </div>
          
          {/* Digital Services - First */}
          <div className="service-category z-10">
            <h3 className="text-lg font-semibold mb-3 text-[#1b1464] flex items-center">
              <span className="inline-block w-4 h-4 bg-[#1b1464] rounded-sm mr-2"></span>
              Digital Services
            </h3>
            
            <div className="mb-4">
              <h4 className="font-medium mb-2">AI Solutions</h4>
              <ul className="space-y-1">
                <li className="text-sm pl-4 py-1 bg-white bg-opacity-80 rounded transition-all hover:bg-white">
                  <span>AI Chat Agents</span>
                </li>
                <li className="text-sm pl-4 py-1 bg-white bg-opacity-80 rounded transition-all hover:bg-white">
                  <span>Persona Bots & Lead Capture</span>
                </li>
                <li className="text-sm pl-4 py-1 bg-white bg-opacity-80 rounded transition-all hover:bg-white">
                  <span>Multilingual Flows</span>
                </li>
              </ul>
            </div>
            
            <div className="mb-4">
              <h4 className="font-medium mb-2">Digital Transformation</h4>
              <ul className="space-y-1">
                <li className="text-sm pl-4 py-1 bg-white bg-opacity-80 rounded transition-all hover:bg-white">
                  <span>Website Design</span>
                </li>
                <li className="text-sm pl-4 py-1 bg-white bg-opacity-80 rounded transition-all hover:bg-white">
                  <span>E-Commerce Development</span>
                </li>
                <li className="text-sm pl-4 py-1 bg-white bg-opacity-80 rounded transition-all hover:bg-white">
                  <span>Multilingual Site Setup</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-2">Digital Automation</h4>
              <ul className="space-y-1">
                <li className="text-sm pl-4 py-1 bg-white bg-opacity-80 rounded transition-all hover:bg-white">
                  <span>Smart Booking Systems</span>
                </li>
                <li className="text-sm pl-4 py-1 bg-white bg-opacity-80 rounded transition-all hover:bg-white">
                  <span>CRM + Loyalty Deployment</span>
                </li>
                <li className="text-sm pl-4 py-1 bg-white bg-opacity-80 rounded transition-all hover:bg-white">
                  <span>Workflow Automation</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Digital Marketing - Second */}
          <div className="service-category z-10">
            <h3 className="text-lg font-semibold mb-3 text-[#596ae9] flex items-center">
              <span className="inline-block w-4 h-4 bg-[#596ae9] rounded-sm mr-2"></span>
              Digital Marketing
            </h3>
            <ul className="space-y-2">
              <li className="mega-menu-item bg-white bg-opacity-80 hover:bg-white">
                <span className="font-medium">Search Engine Optimization</span>
                <span className="text-sm text-gray-500 block">Improve search visibility</span>
              </li>
              <li className="mega-menu-item bg-white bg-opacity-80 hover:bg-white">
                <span className="font-medium">Web Content Writing</span>
                <span className="text-sm text-gray-500 block">Engaging website copy</span>
              </li>
              <li className="mega-menu-item bg-white bg-opacity-80 hover:bg-white">
                <span className="font-medium">Blogging Services</span>
                <span className="text-sm text-gray-500 block">English + Arabic blog posts</span>
              </li>
              <li className="mega-menu-item bg-white bg-opacity-80 hover:bg-white">
                <span className="font-medium">Email Marketing</span>
                <span className="text-sm text-gray-500 block">Targeted email campaigns</span>
              </li>
              <li className="mega-menu-item bg-white bg-opacity-80 hover:bg-white">
                <span className="font-medium">Social Media Strategy</span>
                <span className="text-sm text-gray-500 block">Content calendars & planning</span>
              </li>
              <li className="mega-menu-item bg-white bg-opacity-80 hover:bg-white">
                <span className="font-medium">Analytics & Reporting</span>
                <span className="text-sm text-gray-500 block">Performance tracking</span>
              </li>
            </ul>
          </div>
          
          {/* Design & Branding - Third */}
          <div className="service-category z-10">
            <h3 className="text-lg font-semibold mb-3 text-[#09a4d5] flex items-center">
              <span className="inline-block w-4 h-4 bg-[#09a4d5] rounded-sm mr-2"></span>
              Design & Branding
            </h3>
            <ul className="space-y-2">
              <li className="mega-menu-item bg-white bg-opacity-80 hover:bg-white">
                <span className="font-medium">Brand Identity Design</span>
                <span className="text-sm text-gray-500 block">Visual identity that communicates trust</span>
              </li>
              <li className="mega-menu-item bg-white bg-opacity-80 hover:bg-white">
                <span className="font-medium">Logo Design</span>
                <span className="text-sm text-gray-500 block">English + Arabic logos</span>
              </li>
              <li className="mega-menu-item bg-white bg-opacity-80 hover:bg-white">
                <span className="font-medium">Social Media Visuals</span>
                <span className="text-sm text-gray-500 block">Eye-catching social graphics</span>
              </li>
              <li className="mega-menu-item bg-white bg-opacity-80 hover:bg-white">
                <span className="font-medium">Business Stationery</span>
                <span className="text-sm text-gray-500 block">Cards, letterheads & more</span>
              </li>
              <li className="mega-menu-item bg-white bg-opacity-80 hover:bg-white">
                <span className="font-medium">Brand Guidelines</span>
                <span className="text-sm text-gray-500 block">Comprehensive brand rules</span>
              </li>
              <li className="mega-menu-item bg-white bg-opacity-80 hover:bg-white">
                <span className="font-medium">Rebranding</span>
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
