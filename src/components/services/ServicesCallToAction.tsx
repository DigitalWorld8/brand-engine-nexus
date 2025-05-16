
import React from 'react';
import CTABackground from './cta/CTABackground';
import CTAContent from './cta/CTAContent';
import CTAButton from './cta/CTAButton';

const ServicesCallToAction = () => {
  return (
    <div className="mt-16 text-center relative">
      {/* Background decoration */}
      <CTABackground />
      
      <div className="py-12 px-6">
        <CTAContent 
          title="Ready to transform your digital presence?"
          description="Our team of experts is ready to help you achieve your business goals with tailored digital solutions."
        />
        
        <div className="flex flex-wrap justify-center gap-4">
          <CTAButton icon="arrow">
            Let's Discuss Your Project
          </CTAButton>
          
          <CTAButton isPrimary={false} icon="message">
            Schedule a Call
          </CTAButton>
        </div>
      </div>
    </div>
  );
};

export default ServicesCallToAction;
