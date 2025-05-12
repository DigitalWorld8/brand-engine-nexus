
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Home, Search, Sparkles, Phone, Menu } from 'lucide-react';
import ServicesMegaOverlay from './ServicesMegaOverlay';

interface BottomNavItemProps {
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

const BottomNavItem = ({ icon, label, isActive = false, onClick }: BottomNavItemProps) => (
  <button 
    onClick={onClick}
    className={cn(
      "flex flex-col items-center justify-center py-2",
      "transition-colors",
      isActive ? "text-brand-primary" : "text-gray-500"
    )}
  >
    <div className="mb-1">
      {icon}
    </div>
    <span className="text-xs font-medium">{label}</span>
  </button>
);

const BottomNavbar = () => {
  const [activeItem, setActiveItem] = useState('home');
  const [servicesOpen, setServicesOpen] = useState(false);
  
  const handleServicesToggle = () => {
    setServicesOpen(!servicesOpen);
    setActiveItem('services');
  };

  const handleServicesClose = () => {
    setServicesOpen(false);
  };
  
  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-[9999]">
        <div className="max-w-lg mx-auto px-4 py-1">
          <div className="flex items-center justify-around">
            <BottomNavItem
              icon={<Home className="h-5 w-5" />}
              label="Home"
              isActive={activeItem === 'home'}
              onClick={() => {
                setActiveItem('home');
                setServicesOpen(false);
              }}
            />
            
            <BottomNavItem
              icon={<Menu className="h-5 w-5" />}
              label="About"
              isActive={activeItem === 'about'}
              onClick={() => {
                setActiveItem('about');
                setServicesOpen(false);
              }}
            />
            
            <BottomNavItem
              icon={<Sparkles className="h-5 w-5" />}
              label="Services"
              isActive={activeItem === 'services' || servicesOpen}
              onClick={handleServicesToggle}
            />
            
            <BottomNavItem
              icon={<Search className="h-5 w-5" />}
              label="Blog"
              isActive={activeItem === 'blog'}
              onClick={() => {
                setActiveItem('blog');
                setServicesOpen(false);
              }}
            />
            
            <BottomNavItem
              icon={<Phone className="h-5 w-5" />}
              label="Contact"
              isActive={activeItem === 'contact'}
              onClick={() => {
                setActiveItem('contact');
                setServicesOpen(false);
              }}
            />
          </div>
        </div>
      </div>
      
      {/* Services Mega Menu Overlay for mobile */}
      <ServicesMegaOverlay isOpen={servicesOpen} onClose={handleServicesClose} />
    </>
  );
};

export default BottomNavbar;
