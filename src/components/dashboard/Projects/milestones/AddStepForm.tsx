import { Button } from '@/components/ui/button';
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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { createdAt } from '@/lib/date';
import useProjects from '@/stores/use-projects';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

const featureSchema = z.object({
  name: z
    .string()
    .min(3, { message: 'Name must be at least 3 characters' })
    .max(20),
  description: z
    .string()
    .min(20, { message: 'Description must be at least 20 characters' })
    .max(100),
  duedate: z.string(),
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
      description: '',
      duedate: '',
    },
  });
  const { addMilestone } = useProjects();

  const handleFormSubmit = (data: z.infer<typeof featureSchema>) => {
    const stringDay = data.duedate.charAt(0);
    const day = Number(stringDay);
    const dueDate = createdAt(day);

    const milestone = {
      name: data.name,
      description: data.description,
      dueDate: dueDate,
      implemented: false,
    };

    addMilestone(projectName, milestone);
    toast.success('Milestone Created successfuly');

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
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm text-mytext font-body font-semibold pl-1">
                  Description
                </FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    placeholder="describe task in short."
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
              <FormItem>
                <FormLabel className="text-sm text-mytext font-body font-semibold pl-1">
                  Due Date
                </FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue
                        className="placeholder:text-xs placeholder:text-mytextlight placeholder:font-medium placeholder:font-body text-xs text-mytextlight font-body font-semibold"
                        placeholder="Select a due date"
                      />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem
                      className="text-xs text-mytextlight font-body font-semibold"
                      value="1 Day"
                    >
                      1 Day
                    </SelectItem>
                    <SelectItem
                      className="text-xs text-mytextlight font-body font-semibold"
                      value="2 Days"
                    >
                      2 Days
                    </SelectItem>
                    <SelectItem
                      className="text-xs text-mytextlight font-body font-semibold"
                      value="3 Days"
                    >
                      3 Days
                    </SelectItem>
                    <SelectItem
                      className="text-xs text-mytextlight font-body font-semibold"
                      value="5 Days"
                    >
                      5 Days
                    </SelectItem>
                    <SelectItem
                      className="text-xs text-mytextlight font-body font-semibold"
                      value="7 Day"
                    >
                      7 Days
                    </SelectItem>
                  </SelectContent>
                </Select>
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
