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

interface Props {
  buttonOutline?: boolean;
}

const UploadDialog = ({ buttonOutline }: Props) => {
  const [open, setOpen] = React.useState(false);

  const handleDialogClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant={buttonOutline ? 'outline' : 'default'}
          className={`text-sm  font-body ${
            buttonOutline
              ? 'text-myaccentdark hover:text-myaccent active:text-myaccentlight hover:bg-myaccentlight/10 px-6'
              : 'bg-myaccentdark hover:bg-myaccent active:bg-myaccentlight text-mybg'
          }  flex items-center gap-2`}
        >
          <Plus size={16} />
          {!buttonOutline && 'Add Visuals'}
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
