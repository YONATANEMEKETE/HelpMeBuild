'use client';

import DotPattern from '@/components/DotPatterns';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Plus } from 'lucide-react';
import React, { useState } from 'react';
import AddStepForm from './AddStepForm';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';

const NoMilestones = () => {
  const [open, setOpen] = useState(false);
  const { name } = useParams();

  const handleDialogClose = () => {
    setOpen(false);
  };

  return (
    <div className="h-full flex items-center justify-center relative">
      <DotPattern />
      <div className="relative flex flex-col items-center gap-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-[250px] md:max-w-[400px]"
        >
          <p className="text-lg md:text-2xl text-mytext font-body font-bold">
            No Milestones!
          </p>
          <p className="text-xs md:text-sm text-mytextlight font-body font-semibold">
            breakdown each of your features into milestones so you can keep
            track of your progress.
          </p>
        </motion.div>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Button className="flex items-center gap-x-2 text-sm text-mybg font-body font-semibold bg-myaccentdark hover:bg-myaccent active:bg-myaccentlight">
                <Plus />
                Add Steps
              </Button>
            </motion.div>
          </DialogTrigger>
          <DialogContent className="md:max-w-[400px] max-w-[300px] rounded-lg">
            <DialogHeader className="">
              <DialogTitle className="text-base text-mytext font-body font-semibold">
                Add a New Step
              </DialogTitle>
            </DialogHeader>
            <AddStepForm
              projectName={name as string}
              closeDialog={handleDialogClose}
            />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default NoMilestones;
