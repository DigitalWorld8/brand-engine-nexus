
import React from 'react';

const NavbarLogo = () => {
  return (
    <div className="flex items-center">
      <a href="/" className="flex items-center space-x-1">
        <span className="text-2xl font-bold font-heading text-brand-primary">Brand<span className="text-brand-accent-blue">Engine</span></span>
      </a>
    </div>
  );
};

export default NavbarLogo;
