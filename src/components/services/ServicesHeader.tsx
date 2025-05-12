
import React from 'react';
import { Sparkles } from 'lucide-react';

const ServicesHeader = () => {
  return (
    <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up relative">
      {/* Decorative elements */}
      <div className="absolute -top-10 -left-10 w-20 h-20 bg-gradient-to-br from-brand-primary/10 to-brand-accent-blue/5 rounded-full blur-xl"></div>
      <div className="absolute -top-5 -right-10 w-16 h-16 bg-gradient-to-tl from-brand-accent-violet/10 to-brand-accent-blue/5 rounded-full blur-xl"></div>
      
      <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-gradient-to-r from-brand-primary/10 to-brand-accent-blue/10 text-brand-primary text-sm font-medium border border-brand-primary/10">
        <Sparkles className="h-4 w-4 text-brand-primary" />
        Our Expertise
      </div>
      
      <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-brand-primary via-brand-primary to-brand-accent-blue bg-clip-text text-transparent">
        Innovative Digital Solutions
      </h2>
      
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        We offer comprehensive digital services to help your business thrive in today's competitive landscape. 
        Our expert team delivers tailored solutions for growth.
      </p>
      
      {/* Animated dot pattern */}
      <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-40 h-2 flex justify-center gap-3">
        <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse"></span>
        <span className="w-2 h-2 rounded-full bg-brand-secondary animate-pulse delay-100"></span>
        <span className="w-2 h-2 rounded-full bg-brand-accent-blue animate-pulse delay-200"></span>
      </div>
    </div>
  );
};

export default ServicesHeader;
