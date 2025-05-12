import React from 'react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
interface ServiceFeatureProps {
  icon: React.ElementType;
  title: string;
  description: string;
  gradient: string;
  badges?: string[];
}
const ServiceFeature = ({
  icon: Icon,
  title,
  description,
  gradient,
  badges = []
}: ServiceFeatureProps) => {
  return;
};
export default ServiceFeature;