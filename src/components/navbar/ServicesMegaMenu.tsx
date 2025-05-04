
import React from 'react';
import {
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";

const ServicesMegaMenu = () => {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger className="text-brand-text hover:text-brand-primary font-medium transition-colors">
        Services
      </NavigationMenuTrigger>
      <NavigationMenuContent>
        <div className="w-screen max-w-6xl bg-white rounded-xl shadow-xl p-6 grid grid-cols-3 gap-6 text-left">
          <div>
            <h3 className="text-lg font-semibold mb-3 text-brand-primary">🟪 Design & Branding</h3>
            <ul className="space-y-2">
              <li className="mega-menu-item">
                <span className="font-medium">Brand Identity Design</span>
                <span className="text-sm text-gray-500">Visual identity that communicates trust</span>
              </li>
              <li className="mega-menu-item">
                <span className="font-medium">Logo Design</span>
                <span className="text-sm text-gray-500">English + Arabic logos</span>
              </li>
              <li className="mega-menu-item">
                <span className="font-medium">Social Media Visuals</span>
                <span className="text-sm text-gray-500">Eye-catching social graphics</span>
              </li>
              <li className="mega-menu-item">
                <span className="font-medium">Business Stationery</span>
                <span className="text-sm text-gray-500">Cards, letterheads & more</span>
              </li>
              <li className="mega-menu-item">
                <span className="font-medium">Brand Guidelines</span>
                <span className="text-sm text-gray-500">Comprehensive brand rules</span>
              </li>
              <li className="mega-menu-item">
                <span className="font-medium">Rebranding</span>
                <span className="text-sm text-gray-500">Refresh your brand identity</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-3 text-brand-primary">🟨 Digital Marketing</h3>
            <ul className="space-y-2">
              <li className="mega-menu-item">
                <span className="font-medium">SEO</span>
                <span className="text-sm text-gray-500">Improve search visibility</span>
              </li>
              <li className="mega-menu-item">
                <span className="font-medium">Web Content Writing</span>
                <span className="text-sm text-gray-500">Engaging website copy</span>
              </li>
              <li className="mega-menu-item">
                <span className="font-medium">Blogging</span>
                <span className="text-sm text-gray-500">English + Arabic blog posts</span>
              </li>
              <li className="mega-menu-item">
                <span className="font-medium">Email Marketing</span>
                <span className="text-sm text-gray-500">Targeted email campaigns</span>
              </li>
              <li className="mega-menu-item">
                <span className="font-medium">Social Media Strategy</span>
                <span className="text-sm text-gray-500">Content calendars & planning</span>
              </li>
              <li className="mega-menu-item">
                <span className="font-medium">Analytics & Reporting</span>
                <span className="text-sm text-gray-500">Performance tracking</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-3 text-brand-primary">🟦 Digital Services</h3>
            
            <div className="mb-4">
              <h4 className="font-medium mb-2">🔹 AI Solutions</h4>
              <ul className="space-y-1">
                <li className="text-sm pl-4 py-1 hover:bg-brand-light-gray rounded">AI Chat Agents</li>
                <li className="text-sm pl-4 py-1 hover:bg-brand-light-gray rounded">Persona Bots & Lead Capture</li>
                <li className="text-sm pl-4 py-1 hover:bg-brand-light-gray rounded">Multilingual Flows</li>
              </ul>
            </div>
            
            <div className="mb-4">
              <h4 className="font-medium mb-2">🔹 Digital Transformation</h4>
              <ul className="space-y-1">
                <li className="text-sm pl-4 py-1 hover:bg-brand-light-gray rounded">Website Design</li>
                <li className="text-sm pl-4 py-1 hover:bg-brand-light-gray rounded">E-Commerce Development</li>
                <li className="text-sm pl-4 py-1 hover:bg-brand-light-gray rounded">Multilingual Site Setup</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-2">🔹 Digital Automation</h4>
              <ul className="space-y-1">
                <li className="text-sm pl-4 py-1 hover:bg-brand-light-gray rounded">Smart Booking Systems</li>
                <li className="text-sm pl-4 py-1 hover:bg-brand-light-gray rounded">CRM + Loyalty Deployment</li>
                <li className="text-sm pl-4 py-1 hover:bg-brand-light-gray rounded">Workflow Automation</li>
              </ul>
            </div>
          </div>
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};

export default ServicesMegaMenu;
