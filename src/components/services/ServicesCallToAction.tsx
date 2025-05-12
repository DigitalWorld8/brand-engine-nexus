
import React from 'react';
import { ArrowRight, MessageSquare } from 'lucide-react';

const ServicesCallToAction = () => {
  return (
    <div className="mt-24 text-center relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/5 via-brand-accent-blue/10 to-brand-primary/5 rounded-3xl -z-10 transform -skew-y-1"></div>
      
      <div className="py-12 px-6">
        <h3 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-brand-primary to-brand-accent-blue bg-clip-text text-transparent">
          Ready to transform your digital presence?
        </h3>
        
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Our team of experts is ready to help you achieve your business goals with tailored digital solutions.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <a 
            href="#contact" 
            className="inline-flex items-center px-8 py-4 rounded-xl bg-gradient-to-r from-brand-primary to-brand-accent-blue hover:from-brand-primary/90 hover:to-brand-accent-blue/90 text-white font-medium transition-all hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <span className="relative z-10 text-lg">Let's Discuss Your Project</span>
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
          
          <a 
            href="#contact" 
            className="inline-flex items-center px-8 py-4 rounded-xl bg-white border border-brand-primary/20 text-brand-primary font-medium transition-all hover:scale-105 shadow-md hover:shadow-lg hover:bg-brand-primary/5"
          >
            <MessageSquare className="mr-2 h-5 w-5" />
            <span>Schedule a Call</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServicesCallToAction;
