
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';
import NavigationMenuItems from './NavigationMenuItems';

interface RightNavigationProps {
  onServicesToggle?: (isOpen: boolean) => void;
  servicesOpen?: boolean;
}

const RightNavigation = ({ onServicesToggle, servicesOpen: externalServicesState }: RightNavigationProps) => {
  const [servicesOpen, setServicesOpen] = useState(false);
  
  // Sync internal state with parent state
  useEffect(() => {
    if (externalServicesState !== undefined) {
      setServicesOpen(externalServicesState);
    }
  }, [externalServicesState]);

  return (
    <div className="flex-1 flex items-center justify-end space-x-4">
      {/* Right Side Nav Items */}
      <NavigationMenuItems servicesOpen={servicesOpen} />
      
      {/* Right Side CTA Button */}
      <Button size="sm" className="bg-brand-accent-blue hover:bg-brand-primary text-white transition-colors py-5 px-6">
        <Phone className="mr-2 h-5 w-5" />
        <span className="hidden sm:inline text-base">Contact Us</span>
      </Button>
    </div>
  );
};

export default RightNavigation;
