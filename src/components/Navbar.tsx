
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ChevronDown, Menu } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
        'fixed top-0 right-0 h-full z-50 flex flex-col justify-center transition-all duration-300',
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-md' 
          : 'bg-transparent'
      )}
    >
      {/* Mobile menu toggle button - only visible on small screens */}
      <button 
        className="md:hidden absolute top-4 right-4 p-2 rounded-full bg-brand-primary text-white"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <Menu className="h-6 w-6" />
      </button>
      
      {/* Mobile menu overlay */}
      <div className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} 
           onClick={() => setIsMobileMenuOpen(false)}>
        <div 
          className={`absolute right-0 top-0 h-full w-64 bg-white shadow-xl transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-6 flex flex-col gap-6">
            <a href="/" className="flex items-center space-x-2 mb-8">
              <span className="text-2xl font-bold font-heading text-brand-primary">Brand<span className="text-brand-accent-blue">Engine</span></span>
            </a>
            
            <nav className="flex flex-col space-y-4">
              <a href="#about" className="text-brand-text hover:text-brand-primary font-medium transition-colors">
                About Us
              </a>
              
              <div className="relative">
                <button 
                  className="group text-brand-text hover:text-brand-primary font-medium transition-colors inline-flex items-center"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsMegaMenuOpen(!isMegaMenuOpen);
                  }}
                >
                  Services
                  <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isMegaMenuOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isMegaMenuOpen && (
                  <div className="pl-4 mt-2 space-y-3">
                    <div>
                      <h3 className="text-sm font-semibold mb-2 text-brand-primary">🟪 Design & Branding</h3>
                      <ul className="space-y-1 text-sm">
                        <li>Brand Identity Design</li>
                        <li>Logo Design</li>
                        <li>Social Media Visuals</li>
                        <li>Business Stationery</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-sm font-semibold mb-2 text-brand-primary">🟨 Digital Marketing</h3>
                      <ul className="space-y-1 text-sm">
                        <li>SEO</li>
                        <li>Web Content Writing</li>
                        <li>Email Marketing</li>
                        <li>Social Media Strategy</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-sm font-semibold mb-2 text-brand-primary">🟦 Digital Services</h3>
                      <ul className="space-y-1 text-sm">
                        <li>AI Solutions</li>
                        <li>Digital Transformation</li>
                        <li>Digital Automation</li>
                      </ul>
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
              
              <Button className="bg-brand-accent-blue hover:bg-brand-primary transition-colors mt-4">
                Contact Us
              </Button>
            </nav>
          </div>
        </div>
      </div>
      
      {/* Desktop vertical navbar - visible only on medium screens and up */}
      <div className="hidden md:flex flex-col py-10 px-6 items-center">
        <div className="mb-12 -rotate-90 origin-center whitespace-nowrap">
          <a href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold font-heading text-brand-primary">Brand<span className="text-brand-accent-blue">Engine</span></span>
          </a>
        </div>
        
        <nav className="flex flex-col space-y-10 items-center">
          <a href="#about" className="text-brand-text hover:text-brand-primary font-medium transition-colors transform -rotate-90 origin-center whitespace-nowrap">
            About Us
          </a>
          
          <div 
            className="relative transform -rotate-90 origin-center"
            onMouseEnter={() => setIsMegaMenuOpen(true)} 
            onMouseLeave={() => setIsMegaMenuOpen(false)}
          >
            <button className="group text-brand-text hover:text-brand-primary font-medium transition-colors inline-flex items-center whitespace-nowrap">
              Services
              <ChevronDown className={`ml-1 h-4 w-4 transition-transform group-hover:rotate-180 ${isMegaMenuOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isMegaMenuOpen && (
              <div className="absolute top-0 right-0 transform rotate-90 translate-x-full mt-2 w-screen max-w-6xl bg-white rounded-xl shadow-xl p-6 grid grid-cols-3 gap-6 text-left">
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
          
          <a href="#portfolio" className="text-brand-text hover:text-brand-primary font-medium transition-colors transform -rotate-90 origin-center whitespace-nowrap">
            Portfolio
          </a>
          
          <a href="#blog" className="text-brand-text hover:text-brand-primary font-medium transition-colors transform -rotate-90 origin-center whitespace-nowrap">
            Blog
          </a>
        </nav>
        
        <div className="mt-12 transform -rotate-90">
          <Button className="bg-brand-accent-blue hover:bg-brand-primary transition-colors whitespace-nowrap">
            Contact Us
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
