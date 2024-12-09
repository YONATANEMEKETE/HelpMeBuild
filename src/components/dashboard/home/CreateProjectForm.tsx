'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { DialogClose } from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import Appearance from './Appearance';
import useProjects from '@/stores/use-projects';
import useColor from '@/stores/use-color';
import { createdAt } from '@/lib/date';
import { useDialog } from '@/hooks/use-dialog';
import { toast } from 'sonner';

const formSchema = z.object({
  name: z
    .string()
    .min(3, { message: 'Name must be at least 3 characters' })
    .max(20),
  description: z
    .string({ message: 'Description is required' })
    .min(20, { message: 'Description must be at least 20 characters' })
    .max(100),
});

interface Props {
  onFormSubmited: () => void;
}

const CreateProjectForm = ({ onFormSubmited }: Props) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      description: '',
    },
  });
  const { addProject } = useProjects();
  const { color } = useColor();

  const handleFormSubmit = (data: z.infer<typeof formSchema>) => {
    const date = createdAt();

    const project = {
      name: data.name,
      color: color,
      description: data.description,
      createdAt: date,
    };
    addProject(project);
    onFormSubmited();
    toast.success('Project Created successfuly');
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleFormSubmit)}
        className="space-y-10"
      >
        <div className="space-y-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm text-mytext font-body font-semibold">
                  Project Name
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    id="name"
                    placeholder="SnapBuild"
                    className="placeholder:text-mytextlight placeholder:font-medium placeholder:font-body text-sm text-mytextlight font-body font-semibold"
                  />
                </FormControl>
                <FormMessage className="text-xs font-body font-medium text-red-500" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm text-mytext font-body font-semibold">
                  Project Name
                </FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    placeholder="What problem does your project solves?"
                    className="min-h-20 placeholder:text-mytextlight placeholder:font-medium placeholder:font-body text-xs text-mytextlight font-body font-semibold"
                  />
                </FormControl>
                <FormMessage className="text-xs font-body font-medium text-red-500" />
              </FormItem>
            )}
          />
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
    </Form>
  );
};

export default CreateProjectForm;
