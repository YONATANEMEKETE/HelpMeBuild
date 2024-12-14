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
import { formateDateForTasks } from '@/lib/date';

interface Props {
  feature: featureState;
  projectName: string;
}

const FeatureCard = ({ feature, projectName }: Props) => {
  const { removeFeature, checkFeature, unCheckFeature } = useProjects();

  const deadline = formateDateForTasks(feature.dueDate);

  return (
    <Sheet>
      <div
        className={`flex items-center gap-x-4 w-full px-4 py-3 border border-mytextlight/20 rounded-lg bg-mybg cursor-pointer shadow-lg ${
          feature.implemented && 'opacity-70'
        }`}
      >
        <Checkbox
          checked={feature.implemented}
          onCheckedChange={(checked) => {
            if (checked) {
              checkFeature(projectName, feature.name);
            } else if (!checked) {
              unCheckFeature(projectName, feature.name);
            }
          }}
          className={cn(
            'data-[state=checked]:bg-myaccent border-mytextlight rounded-full data-[state=checked]:border-myaccent'
          )}
        />
        <SheetTrigger asChild>
          <div className="flex items-center justify-between grow">
            <div className="flex items-center gap-x-12">
              <p
                className={`text-sm text-mytext/90 font-body font-semibold ${
                  feature.implemented && 'line-through'
                } `}
              >
                {feature.name}
              </p>
              {feature.implemented ? (
                <Completed />
              ) : (
                <div className="flex items-center gap-x-4 text-xs text-mytextlight font-body font-semibold">
                  <Clock size={16} />
                  <p>{deadline}</p>
                </div>
              )}
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
                    toast.success('Feature Deleted Successfuly');
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
              {feature.implemented ? <Completed /> : <InProgress />}
            </div>
            <div className="flex items-center gap-x-4">
              <p className="text-sm text-mytextlight font-body font-semibold">
                Due Date
              </p>
              <p className="text-sm text-mytextlight/80 font-body font-semibold">
                {deadline}
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
