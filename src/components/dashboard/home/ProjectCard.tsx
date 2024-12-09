import { Badge } from '@/components/ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Separator } from '@/components/ui/separator';
import useProjects, { ProjectState } from '@/stores/use-projects';
import { MoreVertical, Trash2 } from 'lucide-react';
import React from 'react';

const ProjectCard = ({ project }: { project: ProjectState }) => {
  const { removeProject } = useProjects();

  return (
    <div className="bg-mybg rounded-md overflow-clip  max-w-[300px] min-w-[300px] w-[300px] h-fit border-x-2 border-b border-mybglight cursor-pointer">
      <div
        style={{ backgroundColor: project.color }}
        className="w-full h-1 bg-myaccentlight"
      ></div>
      <div className="p-4">
        <div className="flex flex-col gap-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <p className="text-base text-mytext font-body font-semibold">
                {project.name}
              </p>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <div>
                    <MoreVertical size={14} />
                    <span className="sr-only">More</span>
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className="w-48 rounded-lg"
                  side={'right'}
                  align={'start'}
                >
                  <DropdownMenuItem
                    onClick={() => removeProject(project.name)}
                    className="cursor-pointer text-mytextlight hover:text-mytext hover:bg-mybglight"
                  >
                    <Trash2 className="" />
                    <span className="text-sm font-body font-semibold">
                      Delete Project
                    </span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <p className="text-xs text-mytextlight font-body font-medium max-h-12 line-clamp-2 min-h-10">
              {project.description}
            </p>
          </div>
          <div className="space-y-2 w-full">
            <Separator />
            <div className="flex items-center gap-1 flex-wrap">
              {project.techs?.map((item: any) => {
                return (
                  <Badge
                    variant={'outline'}
                    key={item}
                    className="text-xs text-mytextlight font-body font-medium"
                  >
                    {item}
                  </Badge>
                );
              })}
            </div>
          </div>
          <p className="text-end text-xs text-mytextlight font-body font-medium">
            {project.createdAt}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
