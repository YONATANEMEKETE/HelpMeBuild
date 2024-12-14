'use client';

import AddTechForm from '@/components/dashboard/Projects/techs/AddTechForm';
import TechCard from '@/components/dashboard/Projects/techs/TechCard';
import DotPattern from '@/components/DotPatterns';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import useProjects from '@/stores/use-projects';
import { Plus, X } from 'lucide-react';
import { useParams } from 'next/navigation';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Techs = () => {
  const { name } = useParams();
  const [open, setOpen] = useState(false);
  const { projects } = useProjects();
  const currentProject = projects.find((project) => project.name === name);
  const techs = currentProject?.techs;

  const handleDialog = () => {
    setOpen(false);
  };

  const variants = {
    initial: { opacity: 0, scale: 0.9 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  return (
    <section className="flex-1 flex flex-col gap-y-4 relative">
      <DotPattern />
      <p className="text-base md:text-xl text-mytext font-body font-semibold">
        TechStacks
      </p>
      <motion.div
        variants={variants}
        initial="initial"
        animate="animate"
        className="flex flex-wrap gap-2"
      >
        {techs?.map((tech) => (
          <TechCard key={tech} tech={tech} projectName={name as string} />
        ))}
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button
              variant={'outline'}
              className="relative text-myaccentdark hover:text-myaccentdark bg-mybg hover:bg-mybg px-8 h-9"
            >
              <Plus size={16} />
            </Button>
          </DialogTrigger>
          <DialogContent className="min-[450px]:max-w-[500px] max-w-[350px] rounded-lg">
            <DialogTitle className="text-mytext font-body font-semibold">
              Choose the Techs you want to use
            </DialogTitle>
            <AddTechForm
              projectName={name as string}
              closeDialog={handleDialog}
            />
          </DialogContent>
        </Dialog>
      </motion.div>
    </section>
  );
};

export default Techs;
