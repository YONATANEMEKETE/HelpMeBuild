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
import { motion } from 'framer-motion';

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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
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
        </motion.div>
      </DialogTrigger>
      <DialogContent className="md:max-w-[500px] max-w-[350px] rounded-lg">
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
