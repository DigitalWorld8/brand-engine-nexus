
import React from 'react';
import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { cn } from '@/lib/utils';
import { IndustryType } from './types';

interface IndustriesTabsProps {
  industries: IndustryType[];
}

const IndustriesTabs = ({ industries }: IndustriesTabsProps) => {
  return (
    <div className="flex justify-center mb-12">
      <Card className="border-none shadow-lg rounded-2xl overflow-hidden">
        <TabsList className="h-auto p-4 grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-11 gap-4 bg-gray-50 rounded-xl">
          {industries.map((industry, index) => (
            <TabsTrigger 
              key={industry.name} 
              value={industry.name}
              className={cn(
                "data-[state=active]:bg-white data-[state=active]:shadow-md px-3 py-2.5 rounded-lg flex flex-col items-center gap-2",
                "transition-all duration-300 transform-gpu",
                "hover:scale-105 data-[state=active]:scale-110"
              )}
              style={{
                animationDelay: `${index * 40}ms`
              }}
            >
              <div className={cn(
                `${industry.color} text-white p-2.5 rounded-lg`,
                "transform-gpu transition-all duration-300",
                "data-[state=active]:animate-subtle-attention"
              )}>
                <industry.icon className="h-5 w-5" />
              </div>
              <span className="hidden sm:inline text-xs font-medium transition-all duration-300">
                {industry.name}
              </span>
            </TabsTrigger>
          ))}
        </TabsList>
      </Card>
    </div>
  );
};

export default IndustriesTabs;
