import { cn } from '@/lib/utils';
import React from 'react';

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className }: Props) => {
  return (
    <section className={cn('max-w-[1100px] mx-auto', className)}>
      {children}
    </section>
  );
};

export default Container;
