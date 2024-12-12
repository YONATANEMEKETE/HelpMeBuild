'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Plus } from 'lucide-react';
import React from 'react';
import AddVisualsForm from './AddVisualsForm';

const UploadDialog = () => {
  const [open, setOpen] = React.useState(false);

  const handleDialogClose = () => {
    setOpen(false);
  };

  return (
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
  );
};

export default UploadDialog;
