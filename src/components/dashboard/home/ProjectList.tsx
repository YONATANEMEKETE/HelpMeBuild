'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import React from 'react';
import CreateForm from './CreateForm';
import { Plus } from 'lucide-react';
import ProjectCard from './ProjectCard';
import CreateProjectForm from './CreateProjectForm';
import { useDialog } from '@/hooks/use-dialog';
import ProjectsListed from './ProjectsListed';
import { motion } from 'framer-motion';

const ProjectList = () => {
  const { open, setOpen } = useDialog();

  const handleDialogClose = () => {
    setOpen(false);
  };

  return (
    <section className="min-h-[93vh] max-w-[1300px] px-4 md:px-10 pt-6 py-4 flex flex-col gap-y-4">
      <div className="pb-6 border-b">
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="md:text-base text-xs text-mytextlight font-body font-semibold"
        >
          Welcome Back 🙌
        </motion.p>
        <div className="flex items-center justify-between">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="md:text-2xl text-lg text-mytext font-body font-semibold"
          >
            Projects
          </motion.p>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button className="flex items-center gap-x-2 text-xs md:text-sm text-mybg font-body bg-myaccentdark hover:bg-myaccent active:bg-myaccentlight">
                <Plus />
                Create Project
              </Button>
            </DialogTrigger>
            <DialogContent className="min-[500px]:max-w-[400px] max-w-[300px] rounded-lg">
              <DialogHeader className="mb-4">
                <DialogTitle className="text-mytext font-body font-semibold">
                  Create a Project
                </DialogTitle>
              </DialogHeader>
              <CreateProjectForm onFormSubmited={handleDialogClose} />
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <ProjectsListed />
    </section>
  );
};

export default ProjectList;
