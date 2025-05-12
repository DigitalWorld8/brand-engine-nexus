
import React, { useState } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code, Palette, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';
import MobileServiceCategoryItem from './MobileServiceCategoryItem';

interface MobileServiceMenuProps {
  onServiceSelect?: () => void;
}

// Define our service structure
interface ServiceItem {
  title: string;
  description: string;
  onClick?: () => void;
}

interface ServiceCategory {
  id: string;
  title: string;
  color: string;
  icon: React.ReactNode;
  items: ServiceItem[];
}

const MobileServiceMenu = ({ onServiceSelect }: MobileServiceMenuProps) => {
  const [activeTab, setActiveTab] = useState<string>("digital");

  // Define our service categories and items
  const serviceCategories: ServiceCategory[] = [
    {
      id: "digital",
      title: "Digital Services",
      color: "bg-[#1b1464]",
      icon: <Code className="h-5 w-5 text-white" />,
      items: [
        { 
          title: "AI Solutions",
          description: "Chat agents, persona bots & multilingual flows",
          onClick: onServiceSelect
        },
        { 
          title: "Digital Transformation",
          description: "Website design, e-commerce & multilingual sites",
          onClick: onServiceSelect
        },
        { 
          title: "Digital Automation",
          description: "Booking systems, CRM integration & workflows",
          onClick: onServiceSelect
        },
        { 
          title: "Custom Development",
          description: "Web applications & system integrations",
          onClick: onServiceSelect
        },
      ]
    },
    {
      id: "marketing",
      title: "Digital Marketing",
      color: "bg-[#596ae9]",
      icon: <Globe className="h-5 w-5 text-white" />,
      items: [
        { 
          title: "Search Engine Optimization",
          description: "Improve visibility & drive relevant traffic",
          onClick: onServiceSelect
        },
        { 
          title: "Content Writing",
          description: "Website copy & multilingual blog content",
          onClick: onServiceSelect
        },
        { 
          title: "Email Marketing",
          description: "Campaigns that nurture leads & customers",
          onClick: onServiceSelect
        },
        { 
          title: "Social Media",
          description: "Platform strategies & content calendars",
          onClick: onServiceSelect
        },
        { 
          title: "Analytics & Reporting",
          description: "Performance tracking & optimization",
          onClick: onServiceSelect
        },
      ]
    },
    {
      id: "design",
      title: "Design & Branding",
      color: "bg-[#09a4d5]",
      icon: <Palette className="h-5 w-5 text-white" />,
      items: [
        { 
          title: "Brand Identity",
          description: "Comprehensive brand development",
          onClick: onServiceSelect
        },
        { 
          title: "Logo Design",
          description: "English & Arabic professional logos",
          onClick: onServiceSelect
        },
        { 
          title: "Social Media Visuals",
          description: "Eye-catching graphics & templates",
          onClick: onServiceSelect
        },
        { 
          title: "Business Stationery",
          description: "Cards, letterheads & print materials",
          onClick: onServiceSelect
        },
        { 
          title: "Brand Guidelines",
          description: "Documentation for brand consistency",
          onClick: onServiceSelect
        },
        { 
          title: "Rebranding",
          description: "Brand refresh while preserving equity",
          onClick: onServiceSelect
        },
      ]
    }
  ];

  // Function to determine the background color based on active tab
  const getTabBgColor = (tabId: string): string => {
    const category = serviceCategories.find(cat => cat.id === tabId);
    return category ? category.color.replace("bg-", "from-") + " to-white/20" : "";
  };

  return (
    <div className="bg-white h-full flex flex-col">
      <Tabs 
        value={activeTab} 
        onValueChange={setActiveTab}
        className="h-full flex flex-col"
      >
        <TabsList className="h-14 w-full grid grid-cols-3 rounded-none bg-gray-50">
          {serviceCategories.map((category) => (
            <TabsTrigger 
              key={category.id} 
              value={category.id}
              className={cn(
                "h-full data-[state=active]:shadow-none flex flex-col items-center justify-center gap-1 py-1",
                `data-[state=active]:bg-gradient-to-b ${getTabBgColor(category.id)} data-[state=active]:text-white`
              )}
            >
              <div className={`w-6 h-6 rounded-full flex items-center justify-center ${category.color}`}>
                {category.icon}
              </div>
              <span className="text-xs font-medium line-clamp-1">{category.title}</span>
            </TabsTrigger>
          ))}
        </TabsList>
        
        {serviceCategories.map((category) => (
          <TabsContent 
            key={category.id} 
            value={category.id}
            className="mt-0 flex-grow overflow-hidden"
          >
            <ScrollArea className="h-full pb-6">
              <div className="p-4">
                <h3 className="text-lg font-bold mb-4 flex items-center">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-2 ${category.color}`}>
                    {category.icon}
                  </div>
                  {category.title}
                </h3>
                
                <div className="space-y-3">
                  {category.items.map((item, idx) => (
                    <MobileServiceCategoryItem 
                      key={idx}
                      title={item.title}
                      description={item.description}
                      color={category.color.replace("bg-", "text-")}
                      onClick={item.onClick}
                    />
                  ))}
                </div>
              </div>
            </ScrollArea>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default MobileServiceMenu;
