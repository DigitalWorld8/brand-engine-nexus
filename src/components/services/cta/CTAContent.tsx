
import React from 'react';

interface CTAContentProps {
  title: string;
  description: string;
}

const CTAContent = ({ title, description }: CTAContentProps) => {
  return (
    <>
      <h3 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-brand-primary to-brand-accent-blue bg-clip-text text-transparent">
        {title}
      </h3>
      
      <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
        {description}
      </p>
    </>
  );
};

export default CTAContent;
