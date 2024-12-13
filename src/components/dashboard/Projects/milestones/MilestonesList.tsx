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

  return (
    <section className="flex flex-col gap-y-6 w-full grow">
      <div className="flex items-center justify-between px-2">
        <p className="text-base text-mytextlight font-body font-semibold">
          Milestones
        </p>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button className="flex items-center gap-x-2 text-sm text-mybg font-body font-semibold bg-myaccentdark hover:bg-myaccent active:bg-myaccentlight">
              <Plus />
              Add Steps
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-[400px]">
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
      <div className="flex flex-col gap-2">
        {milestones?.map((milestone) => {
          return (
            <MilestoneCard
              key={milestone.name}
              milestone={milestone}
              projectName={projectName}
            />
          );
        })}
      </div>
    </section>
  );
};

export default MilestonesList;
