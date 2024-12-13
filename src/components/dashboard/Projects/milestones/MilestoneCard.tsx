import { Checkbox } from '@/components/ui/checkbox';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import useProjects, {
  featureState,
  milestoneState,
} from '@/stores/use-projects';
import { Clock, MoreHorizontal, Trash2 } from 'lucide-react';
import React from 'react';
import { Completed, InProgress } from '../StatusBadge';
import { toast } from 'sonner';

interface Props {
  milestone: milestoneState;
  projectName: string;
}

const MilestoneCard = ({ milestone, projectName }: Props) => {
  const { removeMilestone, checkFeature, unCheckFeature } = useProjects();

  return (
    <div className="px-4 py-2 rounded-lg border bg-mybglight cursor-pointer shadow-sm flex items-center justify-between">
      <div className="flex items-center gap-x-4">
        <Checkbox
          checked={milestone.completed}
          onCheckedChange={(checked) => {
            if (checked) {
              checkFeature(projectName, milestone.name);
            } else if (!checked) {
              unCheckFeature(projectName, milestone.name);
            }
          }}
          className={cn(
            'data-[state=checked]:bg-myaccent border-mytextlight rounded-full data-[state=checked]:border-myaccent'
          )}
        />
        <div className="flex items-center gap-x-8">
          <p className="text-sm text-mytextlight font-body font-semibold">
            {milestone.name}
          </p>
          {milestone.completed ? <Completed /> : <InProgress />}
        </div>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <MoreHorizontal size={16} className="text-mytextlight" />
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="w-48 rounded-lg"
          side={'right'}
          align={'start'}
        >
          <DropdownMenuItem
            onClick={() => {
              removeMilestone(projectName, milestone.name);
              toast.success('Task Deleted Successfuly');
            }}
            className="cursor-pointer text-mytextlight hover:text-mytext hover:bg-mybglight"
          >
            <Trash2 className="" />
            <span className="text-sm font-body font-semibold">Delete Task</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default MilestoneCard;