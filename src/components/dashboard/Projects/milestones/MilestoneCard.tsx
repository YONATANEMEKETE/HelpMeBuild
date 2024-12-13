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
import useProjects, { featureState } from '@/stores/use-projects';
import { Clock, MoreHorizontal, Trash2 } from 'lucide-react';
import React from 'react';
import { Completed, InProgress } from '../StatusBadge';

interface Props {
  milestone: featureState;
  projectName: string;
}

const MilestoneCard = ({ milestone, projectName }: Props) => {
  const { removeMilestone, checkFeature, unCheckFeature } = useProjects();

  return <div></div>;
};

export default MilestoneCard;
