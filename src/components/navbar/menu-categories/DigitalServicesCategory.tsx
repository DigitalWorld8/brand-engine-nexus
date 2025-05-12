
import React from 'react';
import { ChevronRight } from "lucide-react";

const DigitalServicesCategory = () => {
  return (
    <div className="service-category z-10">
      <h3 className="text-lg font-semibold mb-4 text-[#1b1464] flex items-center">
        <span className="inline-block w-4 h-4 bg-[#1b1464] rounded-sm mr-2"></span>
        Digital Services
      </h3>
      
      <div className="mb-5">
        <h4 className="font-medium mb-2 text-[#1b1464]">AI Solutions</h4>
        <ul className="space-y-2">
          <li className="text-sm pl-4 py-2 bg-white hover:bg-[#e5e7ff] rounded transition-all cursor-pointer group flex items-center justify-between">
            <span>AI Chat Agents</span>
            <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 text-[#1b1464] transition-opacity" />
          </li>
          <li className="text-sm pl-4 py-2 bg-white hover:bg-[#e5e7ff] rounded transition-all cursor-pointer group flex items-center justify-between">
            <span>Persona Bots & Lead Capture</span>
            <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 text-[#1b1464] transition-opacity" />
          </li>
          <li className="text-sm pl-4 py-2 bg-white hover:bg-[#e5e7ff] rounded transition-all cursor-pointer group flex items-center justify-between">
            <span>Multilingual Flows</span>
            <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 text-[#1b1464] transition-opacity" />
          </li>
        </ul>
      </div>
      
      <div className="mb-5">
        <h4 className="font-medium mb-2 text-[#1b1464]">Digital Transformation</h4>
        <ul className="space-y-2">
          <li className="text-sm pl-4 py-2 bg-white hover:bg-[#e5e7ff] rounded transition-all cursor-pointer group flex items-center justify-between">
            <span>Website Design</span>
            <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 text-[#1b1464] transition-opacity" />
          </li>
          <li className="text-sm pl-4 py-2 bg-white hover:bg-[#e5e7ff] rounded transition-all cursor-pointer group flex items-center justify-between">
            <span>E-Commerce Development</span>
            <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 text-[#1b1464] transition-opacity" />
          </li>
          <li className="text-sm pl-4 py-2 bg-white hover:bg-[#e5e7ff] rounded transition-all cursor-pointer group flex items-center justify-between">
            <span>Multilingual Site Setup</span>
            <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 text-[#1b1464] transition-opacity" />
          </li>
        </ul>
      </div>
      
      <div>
        <h4 className="font-medium mb-2 text-[#1b1464]">Digital Automation</h4>
        <ul className="space-y-2">
          <li className="text-sm pl-4 py-2 bg-white hover:bg-[#e5e7ff] rounded transition-all cursor-pointer group flex items-center justify-between">
            <span>Smart Booking Systems</span>
            <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 text-[#1b1464] transition-opacity" />
          </li>
          <li className="text-sm pl-4 py-2 bg-white hover:bg-[#e5e7ff] rounded transition-all cursor-pointer group flex items-center justify-between">
            <span>CRM + Loyalty Deployment</span>
            <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 text-[#1b1464] transition-opacity" />
          </li>
          <li className="text-sm pl-4 py-2 bg-white hover:bg-[#e5e7ff] rounded transition-all cursor-pointer group flex items-center justify-between">
            <span>Workflow Automation</span>
            <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 text-[#1b1464] transition-opacity" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DigitalServicesCategory;
