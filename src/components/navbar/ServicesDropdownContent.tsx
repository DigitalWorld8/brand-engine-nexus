
import React from 'react';
import {
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Code, Globe, Palette, ChevronRight } from 'lucide-react';

const ServicesDropdownContent = () => {
  return (
    <>
      <div className="grid grid-cols-3 gap-8">
        {/* Digital Services Group */}
        <DropdownMenuGroup>
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-gradient-to-r from-[#1b1464] to-[#3a2b9e] w-10 h-10 rounded-lg flex items-center justify-center">
                <Code className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-[#1b1464]">Digital Services</h3>
                <p className="text-xs text-gray-500">Web applications, automation & AI</p>
              </div>
            </div>
            
            <div className="space-y-1">
              <div className="text-sm py-2 px-3 hover:bg-gray-50 rounded transition-colors cursor-pointer group flex items-center justify-between">
                <span>AI Solutions</span>
                <ChevronRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="text-sm py-2 px-3 hover:bg-gray-50 rounded transition-colors cursor-pointer group flex items-center justify-between">
                <span>Digital Transformation</span>
                <ChevronRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="text-sm py-2 px-3 hover:bg-gray-50 rounded transition-colors cursor-pointer group flex items-center justify-between">
                <span>Digital Automation</span>
                <ChevronRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="text-sm py-2 px-3 hover:bg-gray-50 rounded transition-colors cursor-pointer group flex items-center justify-between">
                <span>Custom Web Applications</span>
                <ChevronRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          </div>
        </DropdownMenuGroup>

        {/* Digital Marketing Group */}
        <DropdownMenuGroup>
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-gradient-to-r from-[#596ae9] to-[#7986f1] w-10 h-10 rounded-lg flex items-center justify-center">
                <Globe className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-[#596ae9]">Digital Marketing</h3>
                <p className="text-xs text-gray-500">SEO, content & social media</p>
              </div>
            </div>
            
            <div className="space-y-1">
              <div className="text-sm py-2 px-3 hover:bg-gray-50 rounded transition-colors cursor-pointer group flex items-center justify-between">
                <span>Search Engine Optimization</span>
                <ChevronRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="text-sm py-2 px-3 hover:bg-gray-50 rounded transition-colors cursor-pointer group flex items-center justify-between">
                <span>Web Content Writing</span>
                <ChevronRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="text-sm py-2 px-3 hover:bg-gray-50 rounded transition-colors cursor-pointer group flex items-center justify-between">
                <span>Blogging (English + Arabic)</span>
                <ChevronRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="text-sm py-2 px-3 hover:bg-gray-50 rounded transition-colors cursor-pointer group flex items-center justify-between">
                <span>Email Marketing</span>
                <ChevronRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="text-sm py-2 px-3 hover:bg-gray-50 rounded transition-colors cursor-pointer group flex items-center justify-between">
                <span>Social Media Strategy</span>
                <ChevronRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          </div>
        </DropdownMenuGroup>

        {/* Design & Branding Group */}
        <DropdownMenuGroup>
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-gradient-to-r from-[#09a4d5] to-[#35bde8] w-10 h-10 rounded-lg flex items-center justify-center">
                <Palette className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-[#09a4d5]">Design & Branding</h3>
                <p className="text-xs text-gray-500">Logos, identity & visual systems</p>
              </div>
            </div>
            
            <div className="space-y-1">
              <div className="text-sm py-2 px-3 hover:bg-gray-50 rounded transition-colors cursor-pointer group flex items-center justify-between">
                <span>Brand Identity Design</span>
                <ChevronRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="text-sm py-2 px-3 hover:bg-gray-50 rounded transition-colors cursor-pointer group flex items-center justify-between">
                <span>Logo Design (English + Arabic)</span>
                <ChevronRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="text-sm py-2 px-3 hover:bg-gray-50 rounded transition-colors cursor-pointer group flex items-center justify-between">
                <span>Social Media Visuals</span>
                <ChevronRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="text-sm py-2 px-3 hover:bg-gray-50 rounded transition-colors cursor-pointer group flex items-center justify-between">
                <span>Business Cards & Stationery</span>
                <ChevronRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="text-sm py-2 px-3 hover:bg-gray-50 rounded transition-colors cursor-pointer group flex items-center justify-between">
                <span>Brand Guidelines</span>
                <ChevronRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          </div>
        </DropdownMenuGroup>
      </div>
      
      <DropdownMenuSeparator className="my-4" />
      
      <div className="pt-2">
        <DropdownMenuItem asChild>
          <a href="#services" className="flex justify-center w-full text-brand-primary font-medium cursor-pointer py-2">
            View All Services
          </a>
        </DropdownMenuItem>
      </div>
    </>
  );
};

export default ServicesDropdownContent;
