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
import { Plus, UploadCloud } from 'lucide-react';
import React from 'react';
import AddVisualsForm from './AddVisualsForm';

const NoVisuals = () => {
  const [open, setOpen] = React.useState<boolean>(false);

  const handleDialogClose = () => {
    setOpen(false);
  };

  return (
    <div className="h-full flex items-center justify-center gap-y-6 relative">
      <DotPattern />
      <div className="flex flex-col items-center gap-y-6 z-50 max-w-[400px]">
        <div className="flex flex-col items-center gap-y-2">
          <UploadCloud size={60} className="text-mytext/80" />
          <div className="text-center">
            <p className="text-2xl text-mytext font-body font-semibold">
              No Visuals!
            </p>
            <p className="text-sm text-mytextlight font-body font-semibold">
              upload images of your interfaces, inspirations to steal from or
              wireframes.
            </p>
          </div>
        </div>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button className="text-sm text-mybg font-body bg-myaccentdark hover:bg-myaccent active:bg-myaccentlight flex items-center gap-2">
              <Plus size={16} />
              Add Visuals
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-[500px]">
            <DialogHeader className="p-1">
              <DialogTitle className="text-mytext font-body font-semibold">
                Add Visuals
              </DialogTitle>
            </DialogHeader>
            <AddVisualsForm closeDialog={handleDialogClose} />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default NoVisuals;
