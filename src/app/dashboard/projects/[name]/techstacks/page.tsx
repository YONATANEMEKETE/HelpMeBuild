import AddTechForm from '@/components/dashboard/Projects/techs/AddTechForm';
import TechCard from '@/components/dashboard/Projects/techs/TechCard';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { techs } from '@/constant/constant';
import { Plus, X } from 'lucide-react';
import React from 'react';

const Techs = () => {
  return (
    <section className="flex-1 flex flex-col gap-y-4">
      <p className="text-xl text-mytext font-body font-semibold">TechStacks</p>
      <div className="flex flex-wrap gap-2">
        {techs.map((tech) => (
          <TechCard key={tech.name} tech={tech} />
        ))}
        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant={'outline'}
              className="text-myaccentdark hover:text-myaccentdark bg-mybg hover:bg-mybg px-8 h-9"
            >
              <Plus size={16} />
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-[500px]">
            <DialogTitle className="text-mytext font-body font-semibold">
              Choose the Techs you want to use
            </DialogTitle>
            <AddTechForm />
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Techs;
