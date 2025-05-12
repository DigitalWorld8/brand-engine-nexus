
import React from 'react';

const ServicesBackgroundElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Gradient blobs */}
      <div className="absolute top-40 -right-40 w-96 h-96 rounded-full bg-gradient-to-br from-brand-accent-blue/10 to-brand-primary/5 blur-3xl opacity-70"></div>
      <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-gradient-to-tr from-brand-accent-violet/10 to-brand-primary/5 blur-3xl opacity-70"></div>
      
      {/* Center glow */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-6xl max-h-96 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-primary via-transparent to-transparent blur-3xl"></div>
      </div>
      
      {/* Animated floating particles */}
      <div className="absolute top-20 left-20 w-3 h-3 rounded-full bg-brand-primary/20 animate-float"></div>
      <div className="absolute top-40 right-40 w-2 h-2 rounded-full bg-brand-accent-blue/30 animate-float delay-300"></div>
      <div className="absolute bottom-40 left-1/3 w-4 h-4 rounded-full bg-brand-secondary/20 animate-float delay-700"></div>
      
      {/* Light grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>
    </div>
  );
};

export default ServicesBackgroundElements;
