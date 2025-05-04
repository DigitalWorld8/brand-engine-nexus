import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { useNavbarScroll } from '@/hooks/useNavbarScroll';
import NavbarLogo from './navbar/NavbarLogo';
import LeftNavigation from './navbar/LeftNavigation';
import RightNavigation from './navbar/RightNavigation';
import NavbarFlags from './navbar/NavbarFlags';
const Navbar = () => {
  // Now only destructure isScrolled since showFlags is no longer returned
  const {
    isScrolled
  } = useNavbarScroll();
  const [servicesOpen, setServicesOpen] = useState(false);

  // Function to handle services menu toggle
  const handleServicesToggle = isOpen => {
    setServicesOpen(isOpen);
  };
  return <header className={cn('fixed top-0 left-0 right-0 z-50 transition-all duration-300', isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5')}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-center">
          {/* Left Side Navigation */}
          <LeftNavigation />
          
          {/* Center Logo */}
          <NavbarLogo />
          
          {/* Right Side Navigation */}
          <RightNavigation onServicesToggle={handleServicesToggle} />
        </div>
        
        {/* Removed passing showFlags to NavbarFlags component */}
        <NavbarFlags showFlags={false} />

        {/* Services Mega Menu Overlay - Will slide under logo when active */}
        <div className={cn("absolute left-0 right-0 top-full mt-1 transition-all duration-300 overflow-visible z-50", servicesOpen ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0")}>
          <div className="bg-white rounded-b-xl shadow-xl p-6 transform transition-transform duration-300">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Digital Services - Now First */}
              <div className="service-category">
                <h3 className="text-lg font-semibold mb-5 text-[#33C3F0] flex items-center">
                  <span className="inline-block w-4 h-4 bg-[#33C3F0] rounded-sm mr-2"></span>
                  Digital Services
                </h3>
                
                <div className="mb-5">
                  <h4 className="font-medium mb-2 flex items-center text-[#33C3F0]">
                    <span className="w-2 h-2 bg-[#33C3F0] rounded-full mr-2"></span>
                    AI Solutions
                  </h4>
                  <ul className="space-y-2 ml-4">
                    <li className="text-sm py-1 hover:bg-brand-light-gray rounded transition-all">
                      <span className="block">AI Chat Agents</span>
                    </li>
                    <li className="text-sm py-1 hover:bg-brand-light-gray rounded transition-all">
                      <span className="block">Persona Bots & Lead Capture</span>
                    </li>
                    <li className="text-sm py-1 hover:bg-brand-light-gray rounded transition-all">
                      <span className="block">Multilingual Flows</span>
                    </li>
                  </ul>
                </div>
                
                <div className="mb-5">
                  <h4 className="font-medium mb-2 flex items-center text-[#33C3F0]">
                    <span className="w-2 h-2 bg-[#33C3F0] rounded-full mr-2"></span>
                    Digital Transformation
                  </h4>
                  <ul className="space-y-2 ml-4">
                    <li className="text-sm py-1 hover:bg-brand-light-gray rounded transition-all">
                      <span className="block">Website Design</span>
                    </li>
                    <li className="text-sm py-1 hover:bg-brand-light-gray rounded transition-all">
                      <span className="block">E-Commerce Development</span>
                    </li>
                    <li className="text-sm py-1 hover:bg-brand-light-gray rounded transition-all">
                      <span className="block">Multilingual Site Setup</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2 flex items-center text-[#33C3F0]">
                    <span className="w-2 h-2 bg-[#33C3F0] rounded-full mr-2"></span>
                    Digital Automation
                  </h4>
                  <ul className="space-y-2 ml-4">
                    <li className="text-sm py-1 hover:bg-brand-light-gray rounded transition-all">
                      <span className="block">Smart Booking Systems</span>
                    </li>
                    <li className="text-sm py-1 hover:bg-brand-light-gray rounded transition-all">
                      <span className="block">CRM + Loyalty Deployment</span>
                    </li>
                    <li className="text-sm py-1 hover:bg-brand-light-gray rounded transition-all">
                      <span className="block">Workflow Automation</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Digital Marketing - Now Second */}
              <div className="service-category">
                <h3 className="text-lg font-semibold mb-5 flex items-center text-brand-secondary">
                  <span className="inline-block w-4 h-4 bg-[#F97316] rounded-sm mr-2"></span>
                  Digital Marketing
                </h3>
                <ul className="space-y-4">
                  <li className="mega-menu-item bg-gray-50 hover:bg-gray-100">
                    <span className="font-medium block">SEO</span>
                    <span className="text-sm text-gray-500 block">Improve search visibility</span>
                  </li>
                  <li className="mega-menu-item bg-gray-50 hover:bg-gray-100">
                    <span className="font-medium block">Web Content Writing</span>
                    <span className="text-sm text-gray-500 block">Engaging website copy</span>
                  </li>
                  <li className="mega-menu-item bg-gray-50 hover:bg-gray-100">
                    <span className="font-medium block">Blogging</span>
                    <span className="text-sm text-gray-500 block">English + Arabic blog posts</span>
                  </li>
                  <li className="mega-menu-item bg-gray-50 hover:bg-gray-100">
                    <span className="font-medium block">Email Marketing</span>
                    <span className="text-sm text-gray-500 block">Targeted email campaigns</span>
                  </li>
                  <li className="mega-menu-item bg-gray-50 hover:bg-gray-100">
                    <span className="font-medium block">Social Media Strategy</span>
                    <span className="text-sm text-gray-500 block">Content calendars & planning</span>
                  </li>
                  <li className="mega-menu-item bg-gray-50 hover:bg-gray-100">
                    <span className="font-medium block">Analytics & Reporting</span>
                    <span className="text-sm text-gray-500 block">Performance tracking</span>
                  </li>
                </ul>
              </div>
              
              {/* Design & Branding - Now Third */}
              <div className="service-category">
                <h3 className="text-lg font-semibold mb-5 text-[#9b87f5] flex items-center">
                  <span className="inline-block w-4 h-4 bg-[#9b87f5] rounded-sm mr-2"></span>
                  Design & Branding
                </h3>
                <ul className="space-y-4">
                  <li className="mega-menu-item bg-gray-50 hover:bg-gray-100">
                    <span className="font-medium block">Brand Identity Design</span>
                    <span className="text-sm text-gray-500 block">Visual identity that communicates trust</span>
                  </li>
                  <li className="mega-menu-item bg-gray-50 hover:bg-gray-100">
                    <span className="font-medium block">Logo Design</span>
                    <span className="text-sm text-gray-500 block">English + Arabic logos</span>
                  </li>
                  <li className="mega-menu-item bg-gray-50 hover:bg-gray-100">
                    <span className="font-medium block">Social Media Visuals</span>
                    <span className="text-sm text-gray-500 block">Eye-catching social graphics</span>
                  </li>
                  <li className="mega-menu-item bg-gray-50 hover:bg-gray-100">
                    <span className="font-medium block">Business Stationery</span>
                    <span className="text-sm text-gray-500 block">Cards, letterheads & more</span>
                  </li>
                  <li className="mega-menu-item bg-gray-50 hover:bg-gray-100">
                    <span className="font-medium block">Brand Guidelines</span>
                    <span className="text-sm text-gray-500 block">Comprehensive brand rules</span>
                  </li>
                  <li className="mega-menu-item bg-gray-50 hover:bg-gray-100">
                    <span className="font-medium block">Rebranding</span>
                    <span className="text-sm text-gray-500 block">Refresh your brand identity</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>;
};
export default Navbar;