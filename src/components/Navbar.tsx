
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { useNavbarScroll } from '@/hooks/useNavbarScroll';
import NavbarLogo from './navbar/NavbarLogo';
import LeftNavigation from './navbar/LeftNavigation';
import RightNavigation from './navbar/RightNavigation';
import NavbarFlags from './navbar/NavbarFlags';

const Navbar = () => {
  const { isScrolled, showFlags } = useNavbarScroll();
  const [servicesOpen, setServicesOpen] = useState(false);

  // Function to handle services menu toggle
  const handleServicesToggle = (isOpen) => {
    setServicesOpen(isOpen);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-md py-3' 
          : 'bg-transparent py-5'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-center">
          {/* Left Side Navigation */}
          <LeftNavigation />
          
          {/* Center Logo */}
          <NavbarLogo />
          
          {/* Right Side Navigation */}
          <RightNavigation onServicesToggle={handleServicesToggle} />
        </div>
        
        {/* Dropdown Flags */}
        <NavbarFlags showFlags={showFlags} />

        {/* Services Mega Menu Overlay - Will slide under logo when active */}
        <div 
          className={cn(
            "absolute left-0 right-0 top-full mt-1 transition-all duration-300 overflow-hidden",
            servicesOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="bg-white rounded-b-xl shadow-xl p-6 transform transition-transform duration-300">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
