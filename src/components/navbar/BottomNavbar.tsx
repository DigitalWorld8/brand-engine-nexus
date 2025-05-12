
import React from 'react';
import { cn } from '@/lib/utils';
import { Home, Search, Menu, Settings } from 'lucide-react';
import NavbarLogo from './NavbarLogo';

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
  const [activeItem, setActiveItem] = React.useState('home');
  
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-[9999]">
      <div className="max-w-lg mx-auto px-4 py-1">
        <div className="flex items-center justify-around">
          <BottomNavItem
            icon={<Home className="h-5 w-5" />}
            label="Home"
            isActive={activeItem === 'home'}
            onClick={() => setActiveItem('home')}
          />
          
          <BottomNavItem
            icon={<Search className="h-5 w-5" />}
            label="Explore"
            isActive={activeItem === 'explore'}
            onClick={() => setActiveItem('explore')}
          />
          
          <div className="flex flex-col items-center justify-center -mt-6">
            <div className="rounded-full bg-brand-primary p-3 shadow-lg mb-1">
              <NavbarLogo miniVersion={true} />
            </div>
            <span className="text-xs font-medium text-brand-primary">Brand</span>
          </div>
          
          <BottomNavItem
            icon={<Menu className="h-5 w-5" />}
            label="Services"
            isActive={activeItem === 'services'}
            onClick={() => setActiveItem('services')}
          />
          
          <BottomNavItem
            icon={<Settings className="h-5 w-5" />}
            label="Settings"
            isActive={activeItem === 'settings'}
            onClick={() => setActiveItem('settings')}
          />
        </div>
      </div>
    </div>
  );
};

export default BottomNavbar;
