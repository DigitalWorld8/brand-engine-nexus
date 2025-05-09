
import React from 'react';
import { ChevronRight } from 'lucide-react';

const ServicesMegaMenuContent = () => {
  return (
    <div className="rounded-b-xl shadow-xl p-6 transform transition-transform duration-300 bg-gradient-to-r from-[#e9f8fd] via-[#f0fafd] to-[#e9f8fd] max-w-7xl mx-auto border-t border-brand-accent-blue/10">
      {/* Animated gradient border */}
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-brand-accent-blue via-brand-primary to-brand-accent-violet animate-gradient-x"></div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Digital Services - Now First */}
        <div className="service-category transform transition-all duration-300 hover:translate-y-[-5px]">
          <h3 className="text-lg font-semibold mb-5 text-[#1b1464] flex items-center">
            <span className="inline-block w-4 h-4 bg-[#1b1464] rounded-sm mr-2"></span>
            Digital Services
          </h3>
          
          <div className="mb-5">
            <h4 className="font-medium mb-2 flex items-center text-[#1b1464]">
              <span className="w-2 h-2 bg-[#1b1464] rounded-full mr-2"></span>
              AI Solutions
            </h4>
            <ul className="space-y-2 ml-4">
              <li className="text-sm py-2 px-3 bg-white hover:bg-[#e5e7ff] rounded transition-all cursor-pointer group flex items-center justify-between shadow-sm hover:shadow-md">
                <span className="block">AI Chat Agents</span>
                <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 text-[#1b1464] transition-opacity transform group-hover:translate-x-1 duration-300" />
              </li>
              <li className="text-sm py-2 px-3 bg-white hover:bg-[#e5e7ff] rounded transition-all cursor-pointer group flex items-center justify-between shadow-sm hover:shadow-md">
                <span className="block">Persona Bots & Lead Capture</span>
                <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 text-[#1b1464] transition-opacity transform group-hover:translate-x-1 duration-300" />
              </li>
              <li className="text-sm py-2 px-3 bg-white hover:bg-[#e5e7ff] rounded transition-all cursor-pointer group flex items-center justify-between shadow-sm hover:shadow-md">
                <span className="block">Multilingual Flows</span>
                <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 text-[#1b1464] transition-opacity transform group-hover:translate-x-1 duration-300" />
              </li>
            </ul>
          </div>
          
          <div className="mb-5">
            <h4 className="font-medium mb-2 flex items-center text-[#1b1464]">
              <span className="w-2 h-2 bg-[#1b1464] rounded-full mr-2"></span>
              Digital Transformation
            </h4>
            <ul className="space-y-2 ml-4">
              <li className="text-sm py-2 px-3 bg-white hover:bg-[#e5e7ff] rounded transition-all cursor-pointer group flex items-center justify-between shadow-sm hover:shadow-md">
                <span className="block">Website Design</span>
                <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 text-[#1b1464] transition-opacity transform group-hover:translate-x-1 duration-300" />
              </li>
              <li className="text-sm py-2 px-3 bg-white hover:bg-[#e5e7ff] rounded transition-all cursor-pointer group flex items-center justify-between shadow-sm hover:shadow-md">
                <span className="block">E-Commerce Development</span>
                <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 text-[#1b1464] transition-opacity transform group-hover:translate-x-1 duration-300" />
              </li>
              <li className="text-sm py-2 px-3 bg-white hover:bg-[#e5e7ff] rounded transition-all cursor-pointer group flex items-center justify-between shadow-sm hover:shadow-md">
                <span className="block">Multilingual Site Setup</span>
                <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 text-[#1b1464] transition-opacity transform group-hover:translate-x-1 duration-300" />
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-2 flex items-center text-[#1b1464]">
              <span className="w-2 h-2 bg-[#1b1464] rounded-full mr-2"></span>
              Digital Automation
            </h4>
            <ul className="space-y-2 ml-4">
              <li className="text-sm py-2 px-3 bg-white hover:bg-[#e5e7ff] rounded transition-all cursor-pointer group flex items-center justify-between shadow-sm hover:shadow-md">
                <span className="block">Smart Booking Systems</span>
                <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 text-[#1b1464] transition-opacity transform group-hover:translate-x-1 duration-300" />
              </li>
              <li className="text-sm py-2 px-3 bg-white hover:bg-[#e5e7ff] rounded transition-all cursor-pointer group flex items-center justify-between shadow-sm hover:shadow-md">
                <span className="block">CRM + Loyalty Deployment</span>
                <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 text-[#1b1464] transition-opacity transform group-hover:translate-x-1 duration-300" />
              </li>
              <li className="text-sm py-2 px-3 bg-white hover:bg-[#e5e7ff] rounded transition-all cursor-pointer group flex items-center justify-between shadow-sm hover:shadow-md">
                <span className="block">Workflow Automation</span>
                <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 text-[#1b1464] transition-opacity transform group-hover:translate-x-1 duration-300" />
              </li>
            </ul>
          </div>
        </div>
        
        {/* Digital Marketing - Now Second */}
        <div className="service-category transform transition-all duration-300 hover:translate-y-[-5px]">
          <h3 className="text-lg font-semibold mb-5 flex items-center text-[#596ae9]">
            <span className="inline-block w-4 h-4 bg-[#596ae9] rounded-sm mr-2"></span>
            Digital Marketing
          </h3>
          <ul className="space-y-3">
            <li className="bg-white hover:bg-[#eaedff] p-3 rounded transition-all cursor-pointer group shadow-sm hover:shadow-md">
              <div className="flex items-center justify-between">
                <span className="font-medium block text-[#596ae9]">SEO</span>
                <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 text-[#596ae9] transition-opacity transform group-hover:translate-x-1 duration-300" />
              </div>
              <span className="text-sm text-gray-500 block">Improve search visibility</span>
            </li>
            <li className="bg-white hover:bg-[#eaedff] p-3 rounded transition-all cursor-pointer group shadow-sm hover:shadow-md">
              <div className="flex items-center justify-between">
                <span className="font-medium block text-[#596ae9]">Web Content Writing</span>
                <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 text-[#596ae9] transition-opacity transform group-hover:translate-x-1 duration-300" />
              </div>
              <span className="text-sm text-gray-500 block">Engaging website copy</span>
            </li>
            <li className="bg-white hover:bg-[#eaedff] p-3 rounded transition-all cursor-pointer group shadow-sm hover:shadow-md">
              <div className="flex items-center justify-between">
                <span className="font-medium block text-[#596ae9]">Blogging</span>
                <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 text-[#596ae9] transition-opacity transform group-hover:translate-x-1 duration-300" />
              </div>
              <span className="text-sm text-gray-500 block">English + Arabic blog posts</span>
            </li>
            <li className="bg-white hover:bg-[#eaedff] p-3 rounded transition-all cursor-pointer group shadow-sm hover:shadow-md">
              <div className="flex items-center justify-between">
                <span className="font-medium block text-[#596ae9]">Email Marketing</span>
                <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 text-[#596ae9] transition-opacity transform group-hover:translate-x-1 duration-300" />
              </div>
              <span className="text-sm text-gray-500 block">Targeted email campaigns</span>
            </li>
            <li className="bg-white hover:bg-[#eaedff] p-3 rounded transition-all cursor-pointer group shadow-sm hover:shadow-md">
              <div className="flex items-center justify-between">
                <span className="font-medium block text-[#596ae9]">Social Media Strategy</span>
                <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 text-[#596ae9] transition-opacity transform group-hover:translate-x-1 duration-300" />
              </div>
              <span className="text-sm text-gray-500 block">Content calendars & planning</span>
            </li>
            <li className="bg-white hover:bg-[#eaedff] p-3 rounded transition-all cursor-pointer group shadow-sm hover:shadow-md">
              <div className="flex items-center justify-between">
                <span className="font-medium block text-[#596ae9]">Analytics & Reporting</span>
                <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 text-[#596ae9] transition-opacity transform group-hover:translate-x-1 duration-300" />
              </div>
              <span className="text-sm text-gray-500 block">Performance tracking</span>
            </li>
          </ul>
        </div>
        
        {/* Design & Branding - Now Third */}
        <div className="service-category transform transition-all duration-300 hover:translate-y-[-5px]">
          <h3 className="text-lg font-semibold mb-5 text-[#09a4d5] flex items-center">
            <span className="inline-block w-4 h-4 bg-[#09a4d5] rounded-sm mr-2"></span>
            Design & Branding
          </h3>
          <ul className="space-y-3">
            <li className="bg-white hover:bg-[#e5f7fd] p-3 rounded transition-all cursor-pointer group shadow-sm hover:shadow-md">
              <div className="flex items-center justify-between">
                <span className="font-medium block text-[#09a4d5]">Brand Identity Design</span>
                <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 text-[#09a4d5] transition-opacity transform group-hover:translate-x-1 duration-300" />
              </div>
              <span className="text-sm text-gray-500 block">Visual identity that communicates trust</span>
            </li>
            <li className="bg-white hover:bg-[#e5f7fd] p-3 rounded transition-all cursor-pointer group shadow-sm hover:shadow-md">
              <div className="flex items-center justify-between">
                <span className="font-medium block text-[#09a4d5]">Logo Design</span>
                <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 text-[#09a4d5] transition-opacity transform group-hover:translate-x-1 duration-300" />
              </div>
              <span className="text-sm text-gray-500 block">English + Arabic logos</span>
            </li>
            <li className="bg-white hover:bg-[#e5f7fd] p-3 rounded transition-all cursor-pointer group shadow-sm hover:shadow-md">
              <div className="flex items-center justify-between">
                <span className="font-medium block text-[#09a4d5]">Social Media Visuals</span>
                <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 text-[#09a4d5] transition-opacity transform group-hover:translate-x-1 duration-300" />
              </div>
              <span className="text-sm text-gray-500 block">Eye-catching social graphics</span>
            </li>
            <li className="bg-white hover:bg-[#e5f7fd] p-3 rounded transition-all cursor-pointer group shadow-sm hover:shadow-md">
              <div className="flex items-center justify-between">
                <span className="font-medium block text-[#09a4d5]">Business Stationery</span>
                <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 text-[#09a4d5] transition-opacity transform group-hover:translate-x-1 duration-300" />
              </div>
              <span className="text-sm text-gray-500 block">Cards, letterheads & more</span>
            </li>
            <li className="bg-white hover:bg-[#e5f7fd] p-3 rounded transition-all cursor-pointer group shadow-sm hover:shadow-md">
              <div className="flex items-center justify-between">
                <span className="font-medium block text-[#09a4d5]">Brand Guidelines</span>
                <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 text-[#09a4d5] transition-opacity transform group-hover:translate-x-1 duration-300" />
              </div>
              <span className="text-sm text-gray-500 block">Comprehensive brand rules</span>
            </li>
            <li className="bg-white hover:bg-[#e5f7fd] p-3 rounded transition-all cursor-pointer group shadow-sm hover:shadow-md">
              <div className="flex items-center justify-between">
                <span className="font-medium block text-[#09a4d5]">Rebranding</span>
                <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 text-[#09a4d5] transition-opacity transform group-hover:translate-x-1 duration-300" />
              </div>
              <span className="text-sm text-gray-500 block">Refresh your brand identity</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ServicesMegaMenuContent;
