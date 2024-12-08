import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import React from 'react';
import Appearance from './Appearance';
import { Button } from '@/components/ui/button';
import { DialogClose } from '@/components/ui/dialog';

const CreateForm = () => {
  return (
    <form className="space-y-10">
      <div className="space-y-2">
        <div className="space-y-2 w-full px-1">
          <Label
            htmlFor="name"
            className="text-sm text-mytext font-body font-semibold"
          >
            Name
          </Label>
          <Input
            id="name"
            placeholder="SnapBuild"
            className="placeholder:text-mytextlight placeholder:font-medium placeholder:font-body text-sm text-mytextlight font-body font-semibold"
          />
        </div>
        <div className="space-y-2 w-full px-1">
          <Label
            htmlFor="description"
            className="text-sm text-mytext font-body font-semibold"
          >
            Description
          </Label>
          <Textarea
            placeholder="What problem does your project solves?"
            className="min-h-20 placeholder:text-mytextlight placeholder:font-medium placeholder:font-body text-xs text-mytextlight font-body font-semibold"
          />
        </div>
        <Appearance />
      </div>
      <div className="flex items-center justify-between px-1">
        <DialogClose asChild>
          <Button
            variant={'outline'}
            className="text-sm text-mytext font-body font-semibold hover:bg-mybg"
          >
            Close
          </Button>
        </DialogClose>
        <Button className="text-sm text-mybg font-body  bg-myaccentdark hover:bg-myaccent">
          Create
        </Button>
      </div>
    </form>
  );
};

export default CreateForm;
