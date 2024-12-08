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

const CreateProject = () => {
  return (
    <div className="z-50 p-4 flex flex-col items-center gap-y-4">
      <div className="text-center">
        <p className="text-3xl text-mytext font-body font-semibold">
          No Projects Found
        </p>
        <p className="text-sm text-mytextlight font-body font-semibold">
          Create a project to get started
        </p>
      </div>

      <Dialog>
        <DialogTrigger asChild>
          <Button className="text-sm text-mybg font-body bg-myaccentdark hover:bg-myaccent active:bg-myaccentlight">
            Create Project
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-[400px]">
          <DialogHeader className="mb-4">
            <DialogTitle className="text-mytext font-body font-semibold">
              Create a Project
            </DialogTitle>
          </DialogHeader>
          <CreateProjectForm />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export { CreateProject };
