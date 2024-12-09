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
import { projectcard } from '@/constant/constant';
import CreateProjectForm from './CreateProjectForm';
import { useDialog } from '@/hooks/use-dialog';
import ProjectsListed from './ProjectsListed';

const ProjectList = () => {
  const { open, setOpen } = useDialog();

  const handleDialogClose = () => {
    setOpen(false);
  };

  return (
    <section className="min-h-[93vh] px-10 pt-6 py-4 flex flex-col gap-y-4">
      <div className="pb-6 border-b">
        <p className="text-base text-mytextlight font-body font-semibold">
          Welcome Back 🙌
        </p>
        <div className="flex items-center justify-between">
          <p className="text-2xl text-mytext font-body font-semibold">
            Projects
          </p>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button className="flex items-center gap-x-2 text-sm text-mybg font-body bg-myaccentdark hover:bg-myaccent active:bg-myaccentlight">
                <Plus />
                Create Project
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-[400px]">
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
