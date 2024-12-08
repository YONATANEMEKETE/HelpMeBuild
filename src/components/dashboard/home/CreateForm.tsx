'use client';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import React from 'react';
import Appearance from './Appearance';
import { Button } from '@/components/ui/button';
import { DialogClose } from '@/components/ui/dialog';
import { useForm } from 'react-hook-form';

interface FormType {
  name: string;
  description: string;
}

const CreateForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormType>();

  return (
    <form
      onSubmit={handleSubmit((data) => console.log(data))}
      className="space-y-10"
    >
      <div className="space-y-2">
        <div className="space-y-2 w-full px-1">
          <Label
            htmlFor="name"
            className="text-sm text-mytext font-body font-semibold"
          >
            Name
          </Label>
          <Input
            {...register('name', { required: true, maxLength: 20 })}
            id="name"
            placeholder="SnapBuild"
            className="placeholder:text-mytextlight placeholder:font-medium placeholder:font-body text-sm text-mytextlight font-body font-semibold"
          />
          {errors.name && (
            <p className="text-xs font-body font-medium text-red-500">
              {errors.name.message}
            </p>
          )}
        </div>
        <div className="space-y-2 w-full px-1">
          <Label
            htmlFor="description"
            className="text-sm text-mytext font-body font-semibold"
          >
            Description
          </Label>
          <Textarea
            {...register('description', { required: true })}
            placeholder="What problem does your project solves?"
            className="min-h-20 placeholder:text-mytextlight placeholder:font-medium placeholder:font-body text-xs text-mytextlight font-body font-semibold"
          />
          {errors.description && (
            <p className="text-xs font-body font-medium text-red-500">
              {errors.description.message}
            </p>
          )}
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
        <Button
          type="submit"
          className="text-sm text-mybg font-body  bg-myaccentdark hover:bg-myaccent"
        >
          Create
        </Button>
      </div>
    </form>
  );
};

export default CreateForm;
