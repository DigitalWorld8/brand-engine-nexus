
import React from 'react';
import { Sparkles } from 'lucide-react';

interface ServicesDropdownTriggerProps {
  servicesOpen: boolean;
}

const ServicesDropdownTrigger = ({ servicesOpen }: ServicesDropdownTriggerProps) => {
  return (
    <button 
      className={`
        group overflow-hidden px-5 py-3 flex items-center
        ${servicesOpen 
          ? 'text-brand-primary' 
          : 'text-brand-text hover:text-brand-primary'}
        font-medium transition-all duration-300 text-base
      `}
    >
      <Sparkles 
        className={`mr-2 h-4 w-4 ${servicesOpen ? 'text-brand-primary' : 'text-brand-accent-blue'}`} 
      />
      <span className="relative z-10">Services</span>
      
      {/* Animated arrow indicator */}
      <svg 
        className={`ml-2 h-4 w-4 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M19 9l-7 7-7-7" 
        />
      </svg>
    </button>
  );
};

export default ServicesDropdownTrigger;
