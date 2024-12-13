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
import { z } from 'zod';

const featureSchema = z.object({
  name: z
    .string()
    .min(3, { message: 'Name must be at least 3 characters' })
    .max(20),
  duedate: z.date({ required_error: 'Due date is required' }),
});

interface Props {
  closeDialog: () => void;
  projectName: string;
}

const AddStepForm = ({ projectName, closeDialog }: Props) => {
  const form = useForm<z.infer<typeof featureSchema>>({
    resolver: zodResolver(featureSchema),
    defaultValues: {
      name: '',
      duedate: new Date(),
    },
  });
  const { addMilestone } = useProjects();

  const handleFormSubmit = (data: z.infer<typeof featureSchema>) => {
    const milestone = {
      name: data.name,
      dueDate: data.duedate,
      completed: false,
      completedDate: null,
    };

    addMilestone(projectName, milestone);
    toast.success(
      `${milestone.name} - ${milestone.dueDate} Milestone Created successfuly`
    );

    closeDialog();
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
                    placeholder="build the landing page"
                    className="placeholder:text-mytextlight placeholder:text-xs placeholder:font-medium placeholder:font-body text-sm text-mytextlight font-body font-semibold"
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

export default AddStepForm;
