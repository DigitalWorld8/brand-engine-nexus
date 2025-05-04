
import React from 'react';
import {
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";
import { ChevronDown } from "lucide-react";

const ServicesMegaMenu = () => {
  return (
    <NavigationMenuItem className="relative group">
      <NavigationMenuTrigger className="text-brand-text hover:text-brand-primary font-medium transition-colors bg-transparent">
        Services
      </NavigationMenuTrigger>
      <NavigationMenuContent>
        <div className="w-[500px] bg-white rounded-xl shadow-lg p-8 text-left">
          {/* Design & Branding */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4 text-[#1A1F2C] flex items-center">
              <span className="inline-block w-3 h-3 bg-brand-primary rounded-full mr-3"></span>
              Design & Branding
            </h3>
            <div className="grid grid-cols-1 gap-3 pl-6">
              <div className="menu-service-item">
                <h4 className="font-medium text-[15px] text-gray-800">Brand Identity Design</h4>
                <p className="text-sm text-gray-600">Visual identity that communicates trust</p>
              </div>
              
              <div className="menu-service-item">
                <h4 className="font-medium text-[15px] text-gray-800">Logo Design</h4>
                <p className="text-sm text-gray-600">English + Arabic logos</p>
              </div>
              
              <div className="menu-service-item">
                <h4 className="font-medium text-[15px] text-gray-800">Social Media Visuals</h4>
                <p className="text-sm text-gray-600">Eye-catching social graphics</p>
              </div>
              
              <div className="menu-service-item">
                <h4 className="font-medium text-[15px] text-gray-800">Business Stationery</h4>
                <p className="text-sm text-gray-600">Cards, letterheads & more</p>
              </div>
              
              <div className="menu-service-item">
                <h4 className="font-medium text-[15px] text-gray-800">Brand Guidelines</h4>
                <p className="text-sm text-gray-600">Comprehensive brand rules</p>
              </div>
              
              <div className="menu-service-item">
                <h4 className="font-medium text-[15px] text-gray-800">Rebranding</h4>
                <p className="text-sm text-gray-600">Refresh your brand identity</p>
              </div>
            </div>
          </div>
          
          {/* Digital Marketing */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4 text-[#1A1F2C] flex items-center">
              <span className="inline-block w-3 h-3 bg-brand-accent-yellow rounded-full mr-3"></span>
              Digital Marketing
            </h3>
            <div className="grid grid-cols-1 gap-3 pl-6">
              <div className="menu-service-item">
                <h4 className="font-medium text-[15px] text-gray-800">Search Engine Optimization</h4>
                <p className="text-sm text-gray-600">Improve search visibility</p>
              </div>
              
              <div className="menu-service-item">
                <h4 className="font-medium text-[15px] text-gray-800">Web Content Writing</h4>
                <p className="text-sm text-gray-600">Engaging website copy</p>
              </div>
              
              <div className="menu-service-item">
                <h4 className="font-medium text-[15px] text-gray-800">Email Marketing</h4>
                <p className="text-sm text-gray-600">Targeted email campaigns</p>
              </div>
            </div>
          </div>
          
          {/* Digital Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#1A1F2C] flex items-center">
              <span className="inline-block w-3 h-3 bg-brand-accent-blue rounded-full mr-3"></span>
              Digital Services
            </h3>
            <div className="grid grid-cols-1 gap-3 pl-6">
              <div className="menu-service-item">
                <h4 className="font-medium text-[15px] text-gray-800">AI Solutions</h4>
                <p className="text-sm text-gray-600">AI chat agents & smart assistants</p>
              </div>
              
              <div className="menu-service-item">
                <h4 className="font-medium text-[15px] text-gray-800">Website Design</h4>
                <p className="text-sm text-gray-600">Custom website development</p>
              </div>
              
              <div className="menu-service-item">
                <h4 className="font-medium text-[15px] text-gray-800">Digital Automation</h4>
                <p className="text-sm text-gray-600">Streamline business processes</p>
              </div>
            </div>
          </div>
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};

export default ServicesMegaMenu;
