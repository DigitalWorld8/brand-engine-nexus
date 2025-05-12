
import React from 'react';
import DigitalServicesCategory from './DigitalServicesCategory';
import DigitalMarketingCategory from './DigitalMarketingCategory';
import DesignBrandingCategory from './DesignBrandingCategory';

const ServiceMenuGrid = () => {
  return (
    <div className="relative w-screen max-w-6xl bg-gradient-to-r from-[#e9f8fd] via-[#f0fafd] to-[#e9f8fd] p-6 grid grid-cols-3 gap-8 text-left rounded-xl shadow-xl overflow-hidden">
      {/* Animated gradient border */}
      <div className="absolute inset-0 p-[2px] rounded-xl pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-accent-blue via-brand-primary to-brand-accent-violet animate-gradient-x"></div>
      </div>
      
      {/* Digital Services - First */}
      <DigitalServicesCategory />
      
      {/* Digital Marketing - Second */}
      <DigitalMarketingCategory />
      
      {/* Design & Branding - Third */}
      <DesignBrandingCategory />
    </div>
  );
};

export default ServiceMenuGrid;
