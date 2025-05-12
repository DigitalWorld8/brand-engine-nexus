
import React from 'react';
import { ChevronRight } from "lucide-react";

const DesignBrandingCategory = () => {
  return (
    <div className="service-category z-10">
      <h3 className="text-lg font-semibold mb-4 text-[#09a4d5] flex items-center">
        <span className="inline-block w-4 h-4 bg-[#09a4d5] rounded-sm mr-2"></span>
        Design & Branding
      </h3>
      <ul className="space-y-2">
        <li className="mega-menu-item bg-white hover:bg-[#e5f7fd] rounded transition-all cursor-pointer group p-3">
          <div className="flex items-center justify-between">
            <span className="font-medium text-[#09a4d5]">Brand Identity Design</span>
            <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 text-[#09a4d5] transition-opacity" />
          </div>
          <span className="text-sm text-gray-500 block">Visual identity that communicates trust</span>
        </li>
        <li className="mega-menu-item bg-white hover:bg-[#e5f7fd] rounded transition-all cursor-pointer group p-3">
          <div className="flex items-center justify-between">
            <span className="font-medium text-[#09a4d5]">Logo Design</span>
            <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 text-[#09a4d5] transition-opacity" />
          </div>
          <span className="text-sm text-gray-500 block">English + Arabic logos</span>
        </li>
        <li className="mega-menu-item bg-white hover:bg-[#e5f7fd] rounded transition-all cursor-pointer group p-3">
          <div className="flex items-center justify-between">
            <span className="font-medium text-[#09a4d5]">Social Media Visuals</span>
            <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 text-[#09a4d5] transition-opacity" />
          </div>
          <span className="text-sm text-gray-500 block">Eye-catching social graphics</span>
        </li>
        <li className="mega-menu-item bg-white hover:bg-[#e5f7fd] rounded transition-all cursor-pointer group p-3">
          <div className="flex items-center justify-between">
            <span className="font-medium text-[#09a4d5]">Business Stationery</span>
            <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 text-[#09a4d5] transition-opacity" />
          </div>
          <span className="text-sm text-gray-500 block">Cards, letterheads & more</span>
        </li>
        <li className="mega-menu-item bg-white hover:bg-[#e5f7fd] rounded transition-all cursor-pointer group p-3">
          <div className="flex items-center justify-between">
            <span className="font-medium text-[#09a4d5]">Brand Guidelines</span>
            <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 text-[#09a4d5] transition-opacity" />
          </div>
          <span className="text-sm text-gray-500 block">Comprehensive brand rules</span>
        </li>
        <li className="mega-menu-item bg-white hover:bg-[#e5f7fd] rounded transition-all cursor-pointer group p-3">
          <div className="flex items-center justify-between">
            <span className="font-medium text-[#09a4d5]">Rebranding</span>
            <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 text-[#09a4d5] transition-opacity" />
          </div>
          <span className="text-sm text-gray-500 block">Refresh your brand identity</span>
        </li>
      </ul>
    </div>
  );
};

export default DesignBrandingCategory;
