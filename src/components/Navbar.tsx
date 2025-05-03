
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-md py-3' 
          : 'bg-transparent py-5'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold font-heading text-brand-primary">Brand<span className="text-brand-accent-blue">Engine</span></span>
            </a>
          </div>
          
          <nav className="hidden md:flex space-x-10">
            <a href="#about" className="text-brand-text hover:text-brand-primary font-medium transition-colors">
              About Us
            </a>
            
            <div className="relative" onMouseEnter={() => setIsMegaMenuOpen(true)} onMouseLeave={() => setIsMegaMenuOpen(false)}>
              <button className="group text-brand-text hover:text-brand-primary font-medium transition-colors inline-flex items-center">
                Services
                <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
              </button>
              
              {isMegaMenuOpen && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-screen max-w-6xl bg-white rounded-xl shadow-xl p-6 grid grid-cols-3 gap-6 text-left">
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
              )}
            </div>
            
            <a href="#portfolio" className="text-brand-text hover:text-brand-primary font-medium transition-colors">
              Portfolio
            </a>
            
            <a href="#blog" className="text-brand-text hover:text-brand-primary font-medium transition-colors">
              Blog
            </a>
          </nav>
          
          <div>
            <Button className="bg-brand-accent-blue hover:bg-brand-primary transition-colors">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
