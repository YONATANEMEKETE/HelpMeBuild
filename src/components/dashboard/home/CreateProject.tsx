'use client';

import { Button } from '@/components/ui/button';
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import CreateForm from './CreateForm';
import CreateProjectForm from './CreateProjectForm';
import { useDialog } from '@/hooks/use-dialog';
// import { motion } from 'motion/react';
import { motion as m } from 'framer-motion';

const CreateProject = () => {
  const { open, setOpen } = useDialog();

  const handleDialogClose = () => {
    setOpen(false);
  };

  return (
    <div className="z-50 p-4 flex flex-col items-center gap-y-4">
      <m.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <p className="text-3xl text-mytext font-body font-semibold">
          No Projects Found
        </p>
        <p className="text-sm text-mytextlight font-body font-semibold">
          Create a project to get started
        </p>
      </m.div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Button className="text-sm text-mybg font-body bg-myaccentdark hover:bg-myaccent active:bg-myaccentlight">
              Create Project
            </Button>
          </m.div>
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
  );
};

export { CreateProject };
