import { Checkbox } from '@/components/ui/checkbox';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { Clock, MoreHorizontal, Trash2 } from 'lucide-react';
import React from 'react';
import { Completed, InProgress } from '../StatusBadge';
import useProjects, { featureState } from '@/stores/use-projects';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { toast } from 'sonner';

interface Props {
  feature: featureState;
  projectName: string;
}

const FeatureCard = ({ feature, projectName }: Props) => {
  const { removeFeature } = useProjects();

  return (
    <Sheet>
      <div className="flex items-center gap-x-4 w-full px-4 py-2 border rounded-xl bg-mybglight cursor-pointer shadow-sm">
        <Checkbox
          className={cn(
            'data-[state=checked]:bg-myaccent border-mytextlight rounded-full data-[state=checked]:border-myaccent'
          )}
        />
        <SheetTrigger asChild>
          <div className="flex items-center justify-between grow">
            <div className="flex items-center gap-x-12">
              <p className="text-sm text-mytext/90 font-body font-semibold">
                {feature.name}
              </p>
              <div className="flex items-center gap-x-4 text-xs text-mytextlight font-body font-semibold">
                <Clock size={16} />
                <p>{feature.dueDate}</p>
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
                    removeFeature(projectName, feature.name);
                    toast.success('Project Deleted Successfuly');
                  }}
                  className="cursor-pointer text-mytextlight hover:text-mytext hover:bg-mybglight"
                >
                  <Trash2 className="" />
                  <span className="text-sm font-body font-semibold">
                    Delete Feature
                  </span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </SheetTrigger>
      </div>
      <SheetContent className="w-[300px]">
        <SheetHeader className="mb-8">
          <SheetTitle className="text-mytext font-body font-semibold text-xl">
            {feature.name}
          </SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-y-4">
            <div className="flex items-center gap-x-4">
              <p className="text-sm text-mytextlight font-body font-semibold">
                Status
              </p>
              <InProgress />
              {/* <Completed /> */}
            </div>
            <div className="flex items-center gap-x-4">
              <p className="text-sm text-mytextlight font-body font-semibold">
                Due Date
              </p>
              <p className="text-sm text-mytextlight/80 font-body font-semibold">
                {feature.dueDate}
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-y-2">
            <p className="text-base text-mytext font-body font-semibold">
              Description
            </p>
            <p className="text-sm text-mytextlight font-body font-semibold">
              {feature.description}
            </p>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default FeatureCard;
