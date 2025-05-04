
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
        <div className="w-screen max-w-4xl rounded-xl shadow-xl p-6 grid grid-cols-1 gap-8 text-left relative overflow-hidden">
          {/* Animated Border */}
          <div className="absolute inset-0 rounded-xl z-10">
            <div className="absolute inset-0 bg-[#e2f5fe]/90 opacity-90"></div>
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-brand-accent-blue via-brand-accent-violet to-brand-primary animate-gradient-x"></div>
            <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-brand-primary via-brand-accent-violet to-brand-accent-blue animate-gradient-x"></div>
            <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-brand-accent-blue via-brand-accent-violet to-brand-primary animate-gradient-y"></div>
            <div className="absolute right-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-brand-primary via-brand-accent-violet to-brand-accent-blue animate-gradient-y"></div>
          </div>
          
          {/* Content Container */}
          <div className="relative z-20 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Digital Services - First */}
            <div className="service-category">
              <h3 className="text-lg font-semibold mb-3 text-brand-accent-blue flex items-center">
                <span className="inline-block w-4 h-4 bg-brand-accent-blue rounded-sm mr-2"></span>
                Digital Services
              </h3>
              
              <div className="mb-4">
                <h4 className="font-medium mb-2">AI Solutions</h4>
                <ul className="space-y-1">
                  <li className="text-sm pl-4 py-1 bg-white/80 hover:bg-brand-light-gray rounded transition-all">
                    <span>AI Chat Agents</span>
                  </li>
                  <li className="text-sm pl-4 py-1 bg-white/80 hover:bg-brand-light-gray rounded transition-all">
                    <span>Persona Bots & Lead Capture</span>
                  </li>
                  <li className="text-sm pl-4 py-1 bg-white/80 hover:bg-brand-light-gray rounded transition-all">
                    <span>Multilingual Flows</span>
                  </li>
                </ul>
              </div>
              
              <div className="mb-4">
                <h4 className="font-medium mb-2">Digital Transformation</h4>
                <ul className="space-y-1">
                  <li className="text-sm pl-4 py-1 bg-white/80 hover:bg-brand-light-gray rounded transition-all">
                    <span>Website Design</span>
                  </li>
                  <li className="text-sm pl-4 py-1 bg-white/80 hover:bg-brand-light-gray rounded transition-all">
                    <span>E-Commerce Development</span>
                  </li>
                  <li className="text-sm pl-4 py-1 bg-white/80 hover:bg-brand-light-gray rounded transition-all">
                    <span>Multilingual Site Setup</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Digital Automation</h4>
                <ul className="space-y-1">
                  <li className="text-sm pl-4 py-1 bg-white/80 hover:bg-brand-light-gray rounded transition-all">
                    <span>Smart Booking Systems</span>
                  </li>
                  <li className="text-sm pl-4 py-1 bg-white/80 hover:bg-brand-light-gray rounded transition-all">
                    <span>CRM + Loyalty Deployment</span>
                  </li>
                  <li className="text-sm pl-4 py-1 bg-white/80 hover:bg-brand-light-gray rounded transition-all">
                    <span>Workflow Automation</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Digital Marketing - Second */}
            <div className="service-category">
              <h3 className="text-lg font-semibold mb-3 text-brand-accent-yellow flex items-center">
                <span className="inline-block w-4 h-4 bg-brand-accent-yellow rounded-sm mr-2"></span>
                Digital Marketing
              </h3>
              <ul className="space-y-1">
                <li className="text-sm pl-4 py-1 bg-white/80 hover:bg-brand-light-gray rounded transition-all">
                  <span className="font-medium">Search Engine Optimization</span>
                </li>
                <li className="text-sm pl-4 py-1 bg-white/80 hover:bg-brand-light-gray rounded transition-all">
                  <span className="font-medium">Web Content Writing</span>
                </li>
                <li className="text-sm pl-4 py-1 bg-white/80 hover:bg-brand-light-gray rounded transition-all">
                  <span className="font-medium">Blogging Services</span>
                </li>
                <li className="text-sm pl-4 py-1 bg-white/80 hover:bg-brand-light-gray rounded transition-all">
                  <span className="font-medium">Email Marketing</span>
                </li>
                <li className="text-sm pl-4 py-1 bg-white/80 hover:bg-brand-light-gray rounded transition-all">
                  <span className="font-medium">Social Media Strategy</span>
                </li>
                <li className="text-sm pl-4 py-1 bg-white/80 hover:bg-brand-light-gray rounded transition-all">
                  <span className="font-medium">Analytics & Reporting</span>
                </li>
              </ul>
            </div>
            
            {/* Design & Branding - Third */}
            <div className="service-category">
              <h3 className="text-lg font-semibold mb-3 text-brand-primary flex items-center">
                <span className="inline-block w-4 h-4 bg-brand-primary rounded-sm mr-2"></span>
                Design & Branding
              </h3>
              <ul className="space-y-1">
                <li className="text-sm pl-4 py-1 bg-white/80 hover:bg-brand-light-gray rounded transition-all">
                  <span className="font-medium">Brand Identity Design</span>
                </li>
                <li className="text-sm pl-4 py-1 bg-white/80 hover:bg-brand-light-gray rounded transition-all">
                  <span className="font-medium">Logo Design</span>
                </li>
                <li className="text-sm pl-4 py-1 bg-white/80 hover:bg-brand-light-gray rounded transition-all">
                  <span className="font-medium">Social Media Visuals</span>
                </li>
                <li className="text-sm pl-4 py-1 bg-white/80 hover:bg-brand-light-gray rounded transition-all">
                  <span className="font-medium">Business Stationery</span>
                </li>
                <li className="text-sm pl-4 py-1 bg-white/80 hover:bg-brand-light-gray rounded transition-all">
                  <span className="font-medium">Brand Guidelines</span>
                </li>
                <li className="text-sm pl-4 py-1 bg-white/80 hover:bg-brand-light-gray rounded transition-all">
                  <span className="font-medium">Rebranding</span>
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
