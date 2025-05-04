
import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

interface NavbarFlagsProps {
  showFlags: boolean;
}

const NavbarFlags = ({ showFlags }: NavbarFlagsProps) => {
  // Return null instead of the flags - this effectively removes them
  return null;
};

export default NavbarFlags;
