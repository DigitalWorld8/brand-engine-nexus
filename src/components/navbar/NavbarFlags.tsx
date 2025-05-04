
import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

interface NavbarFlagsProps {
  showFlags: boolean;
}

const NavbarFlags = ({ showFlags }: NavbarFlagsProps) => {
  return (
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
  );
};

export default NavbarFlags;
