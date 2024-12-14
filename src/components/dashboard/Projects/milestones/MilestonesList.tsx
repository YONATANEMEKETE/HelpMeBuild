import useProjects from '@/stores/use-projects';
import React, { useState } from 'react';
import FeatureCard from '../mvp/FeatureCard';
import MilestoneCard from './MilestoneCard';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import AddStepForm from './AddStepForm';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';

interface Props {
  projectName: string;
}

const MilestonesList = ({ projectName }: Props) => {
  const { name } = useParams();
  const [open, setOpen] = useState<boolean>(false);
  const { projects } = useProjects();
  const currentProject = projects.find(
    (project) => project.name === projectName
  );
  const milestones = currentProject?.milestones;

  const handleDialogClose = () => {
    setOpen(false);
  };

  const variants = {
    initial: { opacity: 0, scale: 0.9 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  return (
    <section className="flex flex-col gap-y-6 w-full grow">
      <div className="flex items-center justify-between px-2">
        <p className="text-sm min-[500px]:text-base text-mytextlight font-body font-semibold">
          Milestones
        </p>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button className="flex items-center gap-x-2 text-xs min-[500px]:text-sm text-mybg font-body font-semibold bg-myaccentdark hover:bg-myaccent active:bg-myaccentlight">
              <Plus />
              Add Steps
            </Button>
          </DialogTrigger>
          <DialogContent className="min-[450px]:max-w-[400px] max-w-[300px] rounded-lg">
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
      <motion.div
        variants={variants}
        initial="initial"
        animate="animate"
        className="flex flex-col gap-2"
      >
        {milestones?.map((milestone) => {
          return (
            <MilestoneCard
              key={milestone.name}
              milestone={milestone}
              projectName={projectName}
            />
          );
        })}
      </motion.div>
    </section>
  );
};

export default MilestonesList;
