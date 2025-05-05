import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { useNavbarScroll } from '@/hooks/useNavbarScroll';
import NavbarLogo from './navbar/NavbarLogo';
import LeftNavigation from './navbar/LeftNavigation';
import RightNavigation from './navbar/RightNavigation';
import NavbarFlags from './navbar/NavbarFlags';
import { ChevronRight } from 'lucide-react';

const Navbar = () => {
  // Now only destructure isScrolled since showFlags is no longer returned
  const { isScrolled } = useNavbarScroll();
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
        
        {/* NavbarFlags component without showFlags prop */}
        <NavbarFlags />

        {/* Services Mega Menu Overlay - Will slide under logo when active */}
        <div className={cn("absolute left-0 right-0 top-full mt-1 transition-all duration-300 overflow-visible z-50", servicesOpen ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0")}>
          <div className="rounded-b-xl shadow-xl p-6 transform transition-transform duration-300 bg-[#e9f8fd]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Digital Services - Now First */}
              <div className="service-category">
                <h3 className="text-lg font-semibold mb-5 text-[#1b1464] flex items-center">
                  <span className="inline-block w-4 h-4 bg-[#1b1464] rounded-sm mr-2"></span>
                  Digital Services
                </h3>
                
                <div className="mb-5">
                  <h4 className="font-medium mb-2 flex items-center text-[#1b1464]">
                    <span className="w-2 h-2 bg-[#1b1464] rounded-full mr-2"></span>
                    AI Solutions
                  </h4>
                  <ul className="space-y-2 ml-4">
                    <li className="text-sm py-2 px-3 bg-white hover:bg-[#e5e7ff] rounded transition-all cursor-pointer group flex items-center justify-between">
                      <span className="block">AI Chat Agents</span>
                      <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 text-[#1b1464] transition-opacity" />
                    </li>
                    <li className="text-sm py-2 px-3 bg-white hover:bg-[#e5e7ff] rounded transition-all cursor-pointer group flex items-center justify-between">
                      <span className="block">Persona Bots & Lead Capture</span>
                      <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 text-[#1b1464] transition-opacity" />
                    </li>
                    <li className="text-sm py-2 px-3 bg-white hover:bg-[#e5e7ff] rounded transition-all cursor-pointer group flex items-center justify-between">
                      <span className="block">Multilingual Flows</span>
                      <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 text-[#1b1464] transition-opacity" />
                    </li>
                  </ul>
                </div>
                
                <div className="mb-5">
                  <h4 className="font-medium mb-2 flex items-center text-[#1b1464]">
                    <span className="w-2 h-2 bg-[#1b1464] rounded-full mr-2"></span>
                    Digital Transformation
                  </h4>
                  <ul className="space-y-2 ml-4">
                    <li className="text-sm py-2 px-3 bg-white hover:bg-[#e5e7ff] rounded transition-all cursor-pointer group flex items-center justify-between">
                      <span className="block">Website Design</span>
                      <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 text-[#1b1464] transition-opacity" />
                    </li>
                    <li className="text-sm py-2 px-3 bg-white hover:bg-[#e5e7ff] rounded transition-all cursor-pointer group flex items-center justify-between">
                      <span className="block">E-Commerce Development</span>
                      <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 text-[#1b1464] transition-opacity" />
                    </li>
                    <li className="text-sm py-2 px-3 bg-white hover:bg-[#e5e7ff] rounded transition-all cursor-pointer group flex items-center justify-between">
                      <span className="block">Multilingual Site Setup</span>
                      <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 text-[#1b1464] transition-opacity" />
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2 flex items-center text-[#1b1464]">
                    <span className="w-2 h-2 bg-[#1b1464] rounded-full mr-2"></span>
                    Digital Automation
                  </h4>
                  <ul className="space-y-2 ml-4">
                    <li className="text-sm py-2 px-3 bg-white hover:bg-[#e5e7ff] rounded transition-all cursor-pointer group flex items-center justify-between">
                      <span className="block">Smart Booking Systems</span>
                      <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 text-[#1b1464] transition-opacity" />
                    </li>
                    <li className="text-sm py-2 px-3 bg-white hover:bg-[#e5e7ff] rounded transition-all cursor-pointer group flex items-center justify-between">
                      <span className="block">CRM + Loyalty Deployment</span>
                      <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 text-[#1b1464] transition-opacity" />
                    </li>
                    <li className="text-sm py-2 px-3 bg-white hover:bg-[#e5e7ff] rounded transition-all cursor-pointer group flex items-center justify-between">
                      <span className="block">Workflow Automation</span>
                      <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 text-[#1b1464] transition-opacity" />
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Digital Marketing - Now Second */}
              <div className="service-category">
                <h3 className="text-lg font-semibold mb-5 flex items-center text-[#596ae9]">
                  <span className="inline-block w-4 h-4 bg-[#596ae9] rounded-sm mr-2"></span>
                  Digital Marketing
                </h3>
                <ul className="space-y-3">
                  <li className="bg-white hover:bg-[#eaedff] p-3 rounded transition-all cursor-pointer group">
                    <div className="flex items-center justify-between">
                      <span className="font-medium block text-[#596ae9]">SEO</span>
                      <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 text-[#596ae9] transition-opacity" />
                    </div>
                    <span className="text-sm text-gray-500 block">Improve search visibility</span>
                  </li>
                  <li className="bg-white hover:bg-[#eaedff] p-3 rounded transition-all cursor-pointer group">
                    <div className="flex items-center justify-between">
                      <span className="font-medium block text-[#596ae9]">Web Content Writing</span>
                      <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 text-[#596ae9] transition-opacity" />
                    </div>
                    <span className="text-sm text-gray-500 block">Engaging website copy</span>
                  </li>
                  <li className="bg-white hover:bg-[#eaedff] p-3 rounded transition-all cursor-pointer group">
                    <div className="flex items-center justify-between">
                      <span className="font-medium block text-[#596ae9]">Blogging</span>
                      <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 text-[#596ae9] transition-opacity" />
                    </div>
                    <span className="text-sm text-gray-500 block">English + Arabic blog posts</span>
                  </li>
                  <li className="bg-white hover:bg-[#eaedff] p-3 rounded transition-all cursor-pointer group">
                    <div className="flex items-center justify-between">
                      <span className="font-medium block text-[#596ae9]">Email Marketing</span>
                      <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 text-[#596ae9] transition-opacity" />
                    </div>
                    <span className="text-sm text-gray-500 block">Targeted email campaigns</span>
                  </li>
                  <li className="bg-white hover:bg-[#eaedff] p-3 rounded transition-all cursor-pointer group">
                    <div className="flex items-center justify-between">
                      <span className="font-medium block text-[#596ae9]">Social Media Strategy</span>
                      <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 text-[#596ae9] transition-opacity" />
                    </div>
                    <span className="text-sm text-gray-500 block">Content calendars & planning</span>
                  </li>
                  <li className="bg-white hover:bg-[#eaedff] p-3 rounded transition-all cursor-pointer group">
                    <div className="flex items-center justify-between">
                      <span className="font-medium block text-[#596ae9]">Analytics & Reporting</span>
                      <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 text-[#596ae9] transition-opacity" />
                    </div>
                    <span className="text-sm text-gray-500 block">Performance tracking</span>
                  </li>
                </ul>
              </div>
              
              {/* Design & Branding - Now Third */}
              <div className="service-category">
                <h3 className="text-lg font-semibold mb-5 text-[#09a4d5] flex items-center">
                  <span className="inline-block w-4 h-4 bg-[#09a4d5] rounded-sm mr-2"></span>
                  Design & Branding
                </h3>
                <ul className="space-y-3">
                  <li className="bg-white hover:bg-[#e5f7fd] p-3 rounded transition-all cursor-pointer group">
                    <div className="flex items-center justify-between">
                      <span className="font-medium block text-[#09a4d5]">Brand Identity Design</span>
                      <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 text-[#09a4d5] transition-opacity" />
                    </div>
                    <span className="text-sm text-gray-500 block">Visual identity that communicates trust</span>
                  </li>
                  <li className="bg-white hover:bg-[#e5f7fd] p-3 rounded transition-all cursor-pointer group">
                    <div className="flex items-center justify-between">
                      <span className="font-medium block text-[#09a4d5]">Logo Design</span>
                      <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 text-[#09a4d5] transition-opacity" />
                    </div>
                    <span className="text-sm text-gray-500 block">English + Arabic logos</span>
                  </li>
                  <li className="bg-white hover:bg-[#e5f7fd] p-3 rounded transition-all cursor-pointer group">
                    <div className="flex items-center justify-between">
                      <span className="font-medium block text-[#09a4d5]">Social Media Visuals</span>
                      <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 text-[#09a4d5] transition-opacity" />
                    </div>
                    <span className="text-sm text-gray-500 block">Eye-catching social graphics</span>
                  </li>
                  <li className="bg-white hover:bg-[#e5f7fd] p-3 rounded transition-all cursor-pointer group">
                    <div className="flex items-center justify-between">
                      <span className="font-medium block text-[#09a4d5]">Business Stationery</span>
                      <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 text-[#09a4d5] transition-opacity" />
                    </div>
                    <span className="text-sm text-gray-500 block">Cards, letterheads & more</span>
                  </li>
                  <li className="bg-white hover:bg-[#e5f7fd] p-3 rounded transition-all cursor-pointer group">
                    <div className="flex items-center justify-between">
                      <span className="font-medium block text-[#09a4d5]">Brand Guidelines</span>
                      <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 text-[#09a4d5] transition-opacity" />
                    </div>
                    <span className="text-sm text-gray-500 block">Comprehensive brand rules</span>
                  </li>
                  <li className="bg-white hover:bg-[#e5f7fd] p-3 rounded transition-all cursor-pointer group">
                    <div className="flex items-center justify-between">
                      <span className="font-medium block text-[#09a4d5]">Rebranding</span>
                      <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 text-[#09a4d5] transition-opacity" />
                    </div>
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
