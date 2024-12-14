'use client';

import AddFeatureForm from '@/components/dashboard/Projects/mvp/AddFeatureForm';
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
import { useParams } from 'next/navigation';
import FeaturesList from '@/components/dashboard/Projects/mvp/FeaturesList';
import NoFeatures from '@/components/dashboard/Projects/mvp/NoFeatures';
import useProjects from '@/stores/use-projects';

const Mvp = () => {
  const params = useParams();
  const { name } = params;
  const [open, setOpen] = useState<boolean>(false);
  const { projects } = useProjects();
  const currentProject = projects.find((project) => project.name === name);
  const features = currentProject?.features;
  const handleDialogClose = () => {
    setOpen(false);
  };

  return (
    <section className="flex flex-col gap-4 grow">
      <div className="flex items-center justify-between px-2">
        <p className="text-sm min-[500px]:text-base text-mytextlight font-body font-semibold">
          Features
        </p>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button className="flex items-center gap-x-2 text-xs text-mybg font-body bg-myaccentdark hover:bg-myaccent active:bg-myaccentlight h-8">
              <Plus />
              New Feature
            </Button>
          </DialogTrigger>
          <DialogContent className="md:max-w-[400px] max-w-[300px] rounded-lg">
            <DialogHeader className="">
              <DialogTitle className="text-base text-mytext font-body font-semibold">
                Add New feature
              </DialogTitle>
            </DialogHeader>
            <AddFeatureForm
              projectName={name as string}
              onFormSubmited={handleDialogClose}
            />
          </DialogContent>
        </Dialog>
      </div>
      {features?.length !== 0 ? (
        <FeaturesList projectName={name as string} />
      ) : (
        <NoFeatures />
      )}
    </section>
  );
};

export default Mvp;
