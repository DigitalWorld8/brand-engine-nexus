
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Home, Search, Sparkles, Phone, Menu } from 'lucide-react';
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle 
} from "@/components/ui/dialog";
import { Code, Globe, Palette } from 'lucide-react';

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
      "transition-all duration-200 ease-out-expo",
      "active:scale-90 touch-ripple-effect",
      isActive ? "text-brand-primary" : "text-gray-500"
    )}
  >
    <div className={cn(
      "mb-1 transition-transform duration-300",
      isActive ? "scale-110" : "scale-100"
    )}>
      {icon}
    </div>
    <span className="text-xs font-medium">{label}</span>
  </button>
);

const ServiceItem = ({ icon: Icon, color, title, description }: { 
  icon: React.ElementType;
  color: string;
  title: string;
  description: string;
}) => (
  <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 active:bg-gray-100 transition-colors touch-ripple-effect">
    <div className={`${color} w-10 h-10 rounded-lg flex items-center justify-center`}>
      <Icon className="h-5 w-5 text-white" />
    </div>
    <div>
      <h3 className="font-medium">{title}</h3>
      <p className="text-xs text-gray-500">{description}</p>
    </div>
  </div>
);

const BottomNavbar = () => {
  const [activeItem, setActiveItem] = useState('home');
  const [servicesDialogOpen, setServicesDialogOpen] = useState(false);
  const [touchedItem, setTouchedItem] = useState<string | null>(null);
  
  const handleServicesToggle = () => {
    setServicesDialogOpen(true);
    setActiveItem('services');
  };
  
  const handleTouchStart = (item: string) => {
    setTouchedItem(item);
  };
  
  const handleTouchEnd = () => {
    setTouchedItem(null);
  };
  
  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-[9999]">
        <div className="max-w-lg mx-auto px-4 py-1">
          <div className="flex items-center justify-around">
            <BottomNavItem
              icon={<Home className={cn("h-5 w-5", touchedItem === 'home' ? "animate-micro-pulse" : "")} />}
              label="Home"
              isActive={activeItem === 'home'}
              onClick={() => {
                setActiveItem('home');
              }}
            />
            
            <BottomNavItem
              icon={<Menu className={cn("h-5 w-5", touchedItem === 'about' ? "animate-micro-pulse" : "")} />}
              label="About"
              isActive={activeItem === 'about'}
              onClick={() => {
                setActiveItem('about');
              }}
            />
            
            <BottomNavItem
              icon={<Sparkles className={cn("h-5 w-5", touchedItem === 'services' ? "animate-micro-pulse" : "")} />}
              label="Services"
              isActive={activeItem === 'services'}
              onClick={handleServicesToggle}
            />
            
            <BottomNavItem
              icon={<Search className={cn("h-5 w-5", touchedItem === 'blog' ? "animate-micro-pulse" : "")} />}
              label="Blog"
              isActive={activeItem === 'blog'}
              onClick={() => {
                setActiveItem('blog');
              }}
            />
            
            <BottomNavItem
              icon={<Phone className={cn("h-5 w-5", touchedItem === 'contact' ? "animate-micro-pulse" : "")} />}
              label="Contact"
              isActive={activeItem === 'contact'}
              onClick={() => {
                setActiveItem('contact');
              }}
            />
          </div>
        </div>
      </div>
      
      {/* Mobile services dialog */}
      <Dialog open={servicesDialogOpen} onOpenChange={setServicesDialogOpen}>
        <DialogContent className="max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-xl">Our Services</DialogTitle>
          </DialogHeader>
          
          <div className="grid gap-3 mt-4">
            <ServiceItem 
              icon={Code}
              color="bg-gradient-to-r from-[#1b1464] to-[#3a2b9e]"
              title="Digital Services"
              description="Web applications, automation & more"
            />
            
            <ServiceItem 
              icon={Globe}
              color="bg-gradient-to-r from-[#596ae9] to-[#7986f1]"
              title="Digital Marketing"
              description="SEO, content & social media"
            />
            
            <ServiceItem 
              icon={Palette}
              color="bg-gradient-to-r from-[#09a4d5] to-[#35bde8]"
              title="Design & Branding"
              description="Logos, identity & visual systems"
            />
          </div>
          
          <div className="mt-4">
            <a 
              href="#services" 
              className="block w-full py-3 text-center bg-brand-primary/10 text-brand-primary font-medium rounded-lg 
                         active:scale-98 transition-transform touch-ripple-effect"
              onClick={() => setServicesDialogOpen(false)}
            >
              View All Services
            </a>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default BottomNavbar;
