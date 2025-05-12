
import React from 'react';
import { ChevronRight } from "lucide-react";

const DigitalMarketingCategory = () => {
  return (
    <div className="service-category z-10">
      <h3 className="text-lg font-semibold mb-4 text-[#596ae9] flex items-center">
        <span className="inline-block w-4 h-4 bg-[#596ae9] rounded-sm mr-2"></span>
        Digital Marketing
      </h3>
      <ul className="space-y-2">
        <li className="mega-menu-item bg-white hover:bg-[#eaedff] rounded transition-all cursor-pointer group p-3">
          <div className="flex items-center justify-between">
            <span className="font-medium text-[#596ae9]">Search Engine Optimization</span>
            <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 text-[#596ae9] transition-opacity" />
          </div>
          <span className="text-sm text-gray-500 block">Improve search visibility</span>
        </li>
        <li className="mega-menu-item bg-white hover:bg-[#eaedff] rounded transition-all cursor-pointer group p-3">
          <div className="flex items-center justify-between">
            <span className="font-medium text-[#596ae9]">Web Content Writing</span>
            <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 text-[#596ae9] transition-opacity" />
          </div>
          <span className="text-sm text-gray-500 block">Engaging website copy</span>
        </li>
        <li className="mega-menu-item bg-white hover:bg-[#eaedff] rounded transition-all cursor-pointer group p-3">
          <div className="flex items-center justify-between">
            <span className="font-medium text-[#596ae9]">Blogging Services</span>
            <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 text-[#596ae9] transition-opacity" />
          </div>
          <span className="text-sm text-gray-500 block">English + Arabic blog posts</span>
        </li>
        <li className="mega-menu-item bg-white hover:bg-[#eaedff] rounded transition-all cursor-pointer group p-3">
          <div className="flex items-center justify-between">
            <span className="font-medium text-[#596ae9]">Email Marketing</span>
            <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 text-[#596ae9] transition-opacity" />
          </div>
          <span className="text-sm text-gray-500 block">Targeted email campaigns</span>
        </li>
        <li className="mega-menu-item bg-white hover:bg-[#eaedff] rounded transition-all cursor-pointer group p-3">
          <div className="flex items-center justify-between">
            <span className="font-medium text-[#596ae9]">Social Media Strategy</span>
            <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 text-[#596ae9] transition-opacity" />
          </div>
          <span className="text-sm text-gray-500 block">Content calendars & planning</span>
        </li>
        <li className="mega-menu-item bg-white hover:bg-[#eaedff] rounded transition-all cursor-pointer group p-3">
          <div className="flex items-center justify-between">
            <span className="font-medium text-[#596ae9]">Analytics & Reporting</span>
            <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 text-[#596ae9] transition-opacity" />
          </div>
          <span className="text-sm text-gray-500 block">Performance tracking</span>
        </li>
      </ul>
    </div>
  );
};

export default DigitalMarketingCategory;
