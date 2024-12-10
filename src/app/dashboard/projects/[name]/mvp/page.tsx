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

const Mvp = () => {
  const params = useParams();
  const { name } = params;
  const [open, setOpen] = useState<boolean>(false);
  const handleDialogClose = () => {
    setOpen(false);
  };

  return (
    <section className="flex flex-col gap-4">
      <div className="flex items-center justify-between px-2">
        <p className="text-base text-mytextlight font-body font-semibold">
          Features
        </p>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button className="flex items-center gap-x-2 text-xs text-mybg font-body bg-myaccentdark hover:bg-myaccent active:bg-myaccentlight">
              <Plus />
              New Feature
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-[400px]">
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
    </section>
  );
};

export default Mvp;
