
import React from 'react';

const ServicesHeader = () => {
  return (
    <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
      <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-gradient-to-r from-brand-primary/10 to-brand-accent-blue/10 text-brand-primary text-sm font-medium border border-brand-primary/10">
        Our Expertise
      </div>
      <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-brand-primary via-brand-primary to-brand-accent-blue bg-clip-text text-transparent">
        Innovative Digital Solutions
      </h2>
      <p className="text-lg text-gray-600">
        We offer comprehensive digital services to help your business thrive in today's competitive landscape.
      </p>
    </div>
  );
};

export default ServicesHeader;
