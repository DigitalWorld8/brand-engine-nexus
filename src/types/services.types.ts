
import { ReactElement } from 'react';

export interface ServiceItem {
  title: string;
  description: string;
}

export interface ServiceCategory {
  icon: React.ElementType;
  color: string;
  title: string;
  description: string;
  services: ServiceItem[];
}
