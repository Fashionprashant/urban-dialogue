
import React from 'react';
import { useTransition } from '@/contexts/transition-context';
import { cn } from '@/lib/utils';

interface PageTransitionProps {
  children: React.ReactNode;
  className?: string;
}

export function PageTransition({ children, className }: PageTransitionProps) {
  const { isTransitioning } = useTransition();

  return (
    <div
      className={cn(
        'transition-all duration-300',
        isTransitioning 
          ? 'opacity-0 translate-y-2' 
          : 'opacity-100 translate-y-0',
        className
      )}
    >
      {children}
    </div>
  );
}
