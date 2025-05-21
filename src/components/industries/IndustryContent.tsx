
import React, { useRef } from 'react';
import { TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from '@/lib/utils';
import { IndustryType } from './types';
import IndustryHeader from './IndustryHeader';
import IndustryExamples from './IndustryExamples';

interface IndustryContentProps {
  industry: IndustryType;
  isChanging: boolean;
}

const IndustryContent = ({ industry, isChanging }: IndustryContentProps) => {
  return (
    <TabsContent 
      key={industry.name} 
      value={industry.name} 
      className="focus-visible:outline-none"
    >
      <Card className="border-none shadow-xl rounded-3xl overflow-hidden transform-gpu">
        <CardContent className="p-8">
          <IndustryHeader 
            icon={industry.icon}
            color={industry.color}
            name={industry.name}
            description={industry.description}
          />
          <IndustryExamples examples={industry.examples} />
        </CardContent>
      </Card>
    </TabsContent>
  );
};

export default IndustryContent;
