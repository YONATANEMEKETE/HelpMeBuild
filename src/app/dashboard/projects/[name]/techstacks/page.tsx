import TechCard from '@/components/dashboard/Projects/techs/TechCard';
import { Button } from '@/components/ui/button';
import { techs } from '@/constant/constant';
import { X } from 'lucide-react';
import React from 'react';

const Techs = () => {
  return (
    <section className="flex-1 flex flex-col gap-y-4">
      <p className="text-xl text-mytext font-body font-semibold">TechStacks</p>
      <div className="flex flex-wrap gap-2">
        {techs.map((tech) => (
          <TechCard key={tech.name} tech={tech} />
        ))}
        <Button
          variant={'outline'}
          className="text-myaccentdark hover:text-myaccentdark bg-mybg hover:bg-mybg  active:bg-myaccentlight/20 px-8 h-9"
        >
          <X size={16} />
        </Button>
      </div>
    </section>
  );
};

export default Techs;
