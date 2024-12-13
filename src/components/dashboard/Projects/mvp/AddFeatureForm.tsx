'use client';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { createdAt } from '@/lib/date';
import { cn } from '@/lib/utils';
import useProjects from '@/stores/use-projects';
import { zodResolver } from '@hookform/resolvers/zod';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { date, number, z } from 'zod';

const featureSchema = z.object({
  name: z
    .string()
    .min(3, { message: 'Name must be at least 3 characters' })
    .max(20),
  description: z
    .string()
    .min(20, { message: 'Description must be at least 20 characters' })
    .max(100),
  duedate: z.date({ required_error: 'Due date is required' }),
});

interface Props {
  onFormSubmited: () => void;
  projectName: string;
}

const AddFeatureForm = ({ onFormSubmited, projectName }: Props) => {
  const form = useForm<z.infer<typeof featureSchema>>({
    resolver: zodResolver(featureSchema),
    defaultValues: {
      name: '',
      description: '',
      duedate: new Date(),
    },
  });
  const { addFeature, projects } = useProjects();
  const currentProject = projects.find((p) => p.name === projectName);

  const handleFormSubmit = (data: z.infer<typeof featureSchema>) => {
    const feature = {
      name: data.name,
      description: data.description,
      dueDate: data.duedate,
      implemented: false,
    };

    const alreadyExists = currentProject?.features.find((f) => {
      return f.name === feature.name;
    });

    if (alreadyExists) {
      toast.error('Feature already exists');
    } else {
      addFeature(projectName, feature);
      toast.success('Feature Created successfuly');

      onFormSubmited();
    }
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
                <FormLabel className="text-sm text-mytext font-body font-semibold pl-1">
                  Name
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    id="name"
                    placeholder="User Auth"
                    className="placeholder:text-mytextlight placeholder:text-xs placeholder:font-medium placeholder:font-body text-sm text-mytextlight font-body font-semibold"
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
                <FormLabel className="text-sm text-mytext font-body font-semibold pl-1">
                  Description
                </FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    placeholder="describe your feature in short."
                    className="min-h-20 placeholder:text-xs placeholder:text-mytextlight placeholder:font-medium placeholder:font-body text-xs text-mytextlight font-body font-semibold"
                  />
                </FormControl>
                <FormMessage className="text-xs font-body font-medium text-red-500" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="duedate"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-1">
                <FormLabel className="text-sm text-mytext font-body font-semibold pl-1">
                  Due Date
                </FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={'outline'}
                        className={cn(
                          'w-full pl-3 text-left font-normal',
                          !field.value && 'text-muted-foreground'
                        )}
                      >
                        {field.value ? (
                          format(field.value, 'PPP')
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) => date < new Date()}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage className="text-xs font-body font-medium text-red-500" />
              </FormItem>
            )}
          />
        </div>
        <Button
          type="submit"
          className="text-sm text-mybg font-body  bg-myaccentdark hover:bg-myaccent w-full"
        >
          Add Feature
        </Button>
      </form>
    </Form>
  );
};

export default AddFeatureForm;
