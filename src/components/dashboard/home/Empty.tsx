import DotPattern from '@/components/DotPatterns';
import { cn } from '@/lib/utils';
import React from 'react';
import { CreateProject } from './CreateProject';

const Empty = () => {
  return (
    <section className="relative overflow-clip min-h-[93vh] p-4 grid place-content-center">
      <DotPattern />
      <CreateProject />
    </section>
  );
};

export default Empty;
