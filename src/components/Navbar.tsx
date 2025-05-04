
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ChevronDown, Phone, Calendar, ArrowRight, ArrowDown, ArrowUp } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showFlags, setShowFlags] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Show flags after scrolling down a bit
      if (window.scrollY > 200) {
        setShowFlags(true);
      } else {
        setShowFlags(false);
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-center">
          {/* Left Side Navigation */}
          <div className="flex-1 flex items-center justify-start space-x-4">
            {/* Left Side CTA Button */}
            <Button size="sm" variant="outline" className="hidden lg:flex items-center border-brand-accent-blue text-brand-accent-blue hover:bg-brand-accent-blue/10">
              <Calendar className="mr-1 h-4 w-4" />
              <span className="hidden xl:inline">Quick Schedule</span>
            </Button>
            
            {/* Left Side Nav Items */}
            <NavigationMenu className="hidden md:flex">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink href="#about" className="text-brand-text hover:text-brand-primary font-medium transition-colors px-3 py-2">
                    About Us
                  </NavigationMenuLink>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuLink href="#portfolio" className="text-brand-text hover:text-brand-primary font-medium transition-colors px-3 py-2">
                    Portfolio
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          
          {/* Center Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-1">
              <span className="text-2xl font-bold font-heading text-brand-primary">Brand<span className="text-brand-accent-blue">Engine</span></span>
            </a>
          </div>
          
          {/* Right Side Navigation */}
          <div className="flex-1 flex items-center justify-end space-x-4">
            {/* Right Side Nav Items */}
            <NavigationMenu className="hidden md:flex">
              <NavigationMenuList>
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
                
                <NavigationMenuItem>
                  <NavigationMenuLink href="#blog" className="text-brand-text hover:text-brand-primary font-medium transition-colors px-3 py-2">
                    Blog
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            {/* Right Side CTA Button */}
            <Button size="sm" className="bg-brand-accent-blue hover:bg-brand-primary transition-colors">
              <Phone className="mr-1 h-4 w-4" />
              <span className="hidden sm:inline">Contact Us</span>
            </Button>
          </div>
        </div>
        
        {/* Dropdown Flags */}
        <div className="absolute left-0 w-full flex justify-between pointer-events-none">
          {/* Left Flag */}
          <div 
            className={cn(
              "transition-all duration-700 transform",
              showFlags 
                ? "translate-y-20 opacity-100" 
                : "-translate-y-20 opacity-0"
            )}
          >
            <div className="bg-brand-accent-blue text-white p-4 rounded-b-lg shadow-lg pointer-events-auto">
              <div className="flex flex-col items-center space-y-2">
                <ArrowDown className="h-4 w-4 animate-bounce" />
                <p className="font-medium">Book a Call</p>
                <Button size="sm" variant="outline" className="border-white text-white hover:bg-white/20">
                  Schedule Now
                </Button>
              </div>
            </div>
          </div>
          
          {/* Right Flag */}
          <div 
            className={cn(
              "transition-all duration-700 transform",
              showFlags 
                ? "translate-y-20 opacity-100" 
                : "-translate-y-20 opacity-0"
            )}
          >
            <div className="bg-brand-accent-violet text-white p-4 rounded-b-lg shadow-lg pointer-events-auto">
              <div className="flex flex-col items-center space-y-2">
                <ArrowDown className="h-4 w-4 animate-bounce" />
                <p className="font-medium">Free Audit</p>
                <Button size="sm" variant="outline" className="border-white text-white hover:bg-white/20">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
