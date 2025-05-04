
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
        <div className="w-screen max-w-6xl bg-white rounded-xl shadow-xl p-6 grid grid-cols-3 gap-8 text-left">
          {/* Design & Branding */}
          <div className="service-category">
            <h3 className="text-lg font-semibold mb-3 text-brand-primary flex items-center">
              <span className="inline-block w-4 h-4 bg-brand-primary rounded-sm mr-2"></span>
              Design & Branding
            </h3>
            <ul className="space-y-2">
              <li className="mega-menu-item">
                <span className="font-medium">Brand Identity Design</span>
                <span className="text-sm text-gray-500 block">Visual identity that communicates trust</span>
              </li>
              <li className="mega-menu-item">
                <span className="font-medium">Logo Design</span>
                <span className="text-sm text-gray-500 block">English + Arabic logos</span>
              </li>
              <li className="mega-menu-item">
                <span className="font-medium">Social Media Visuals</span>
                <span className="text-sm text-gray-500 block">Eye-catching social graphics</span>
              </li>
              <li className="mega-menu-item">
                <span className="font-medium">Business Stationery</span>
                <span className="text-sm text-gray-500 block">Cards, letterheads & more</span>
              </li>
              <li className="mega-menu-item">
                <span className="font-medium">Brand Guidelines</span>
                <span className="text-sm text-gray-500 block">Comprehensive brand rules</span>
              </li>
              <li className="mega-menu-item">
                <span className="font-medium">Rebranding</span>
                <span className="text-sm text-gray-500 block">Refresh your brand identity</span>
              </li>
            </ul>
          </div>
          
          {/* Digital Marketing */}
          <div className="service-category">
            <h3 className="text-lg font-semibold mb-3 text-brand-accent-yellow flex items-center">
              <span className="inline-block w-4 h-4 bg-brand-accent-yellow rounded-sm mr-2"></span>
              Digital Marketing
            </h3>
            <ul className="space-y-2">
              <li className="mega-menu-item">
                <span className="font-medium">Search Engine Optimization</span>
                <span className="text-sm text-gray-500 block">Improve search visibility</span>
              </li>
              <li className="mega-menu-item">
                <span className="font-medium">Web Content Writing</span>
                <span className="text-sm text-gray-500 block">Engaging website copy</span>
              </li>
              <li className="mega-menu-item">
                <span className="font-medium">Blogging Services</span>
                <span className="text-sm text-gray-500 block">English + Arabic blog posts</span>
              </li>
              <li className="mega-menu-item">
                <span className="font-medium">Email Marketing</span>
                <span className="text-sm text-gray-500 block">Targeted email campaigns</span>
              </li>
              <li className="mega-menu-item">
                <span className="font-medium">Social Media Strategy</span>
                <span className="text-sm text-gray-500 block">Content calendars & planning</span>
              </li>
              <li className="mega-menu-item">
                <span className="font-medium">Analytics & Reporting</span>
                <span className="text-sm text-gray-500 block">Performance tracking</span>
              </li>
            </ul>
          </div>
          
          {/* Digital Services */}
          <div className="service-category">
            <h3 className="text-lg font-semibold mb-3 text-brand-accent-blue flex items-center">
              <span className="inline-block w-4 h-4 bg-brand-accent-blue rounded-sm mr-2"></span>
              Digital Services
            </h3>
            
            <div className="mb-4">
              <h4 className="font-medium mb-2">AI Solutions</h4>
              <ul className="space-y-1">
                <li className="text-sm pl-4 py-1 hover:bg-brand-light-gray rounded transition-all">
                  <span>AI Chat Agents</span>
                </li>
                <li className="text-sm pl-4 py-1 hover:bg-brand-light-gray rounded transition-all">
                  <span>Persona Bots & Lead Capture</span>
                </li>
                <li className="text-sm pl-4 py-1 hover:bg-brand-light-gray rounded transition-all">
                  <span>Multilingual Flows</span>
                </li>
              </ul>
            </div>
            
            <div className="mb-4">
              <h4 className="font-medium mb-2">Digital Transformation</h4>
              <ul className="space-y-1">
                <li className="text-sm pl-4 py-1 hover:bg-brand-light-gray rounded transition-all">
                  <span>Website Design</span>
                </li>
                <li className="text-sm pl-4 py-1 hover:bg-brand-light-gray rounded transition-all">
                  <span>E-Commerce Development</span>
                </li>
                <li className="text-sm pl-4 py-1 hover:bg-brand-light-gray rounded transition-all">
                  <span>Multilingual Site Setup</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-2">Digital Automation</h4>
              <ul className="space-y-1">
                <li className="text-sm pl-4 py-1 hover:bg-brand-light-gray rounded transition-all">
                  <span>Smart Booking Systems</span>
                </li>
                <li className="text-sm pl-4 py-1 hover:bg-brand-light-gray rounded transition-all">
                  <span>CRM + Loyalty Deployment</span>
                </li>
                <li className="text-sm pl-4 py-1 hover:bg-brand-light-gray rounded transition-all">
                  <span>Workflow Automation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};

export default ServicesMegaMenu;
