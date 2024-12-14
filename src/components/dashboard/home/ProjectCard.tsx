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
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react';
import { toast } from 'sonner';
import { AnimatePresence, motion } from 'framer-motion';

const ProjectCard = ({ project }: { project: ProjectState }) => {
  const { removeProject, projects } = useProjects();
  const toolsToDisplay = project.techs.slice(0, 5);

  const variants = {
    initial: { opacity: 0, scale: 0.9 },
    animate: {
      opacity: 1,
      scale: 1,
    },
  };

  return (
    <motion.div
      layout
      variants={variants}
      exit={{ opacity: 0, scale: 0.75 }}
      className="bg-mybg rounded-md overflow-clip max-w-[400px]  min-[620px]:max-w-[300px] min-w-[250px] w-[300px] flex-1 h-fit border-x border-b border-mytextlight/20 cursor-pointer"
    >
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
                    onClick={() => {
                      removeProject(project.name);
                      toast.success('Project Deleted Successfuly');
                    }}
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
            <Link
              href={`/dashboard/projects/${project.name}/mvp`}
              className="text-xs text-mytextlight font-body font-medium max-h-12 line-clamp-2 "
            >
              {project.description}
            </Link>
          </div>
          <Link
            href={`/dashboard/projects/${project.name}/mvp`}
            className="space-y-2 w-full"
          >
            <Separator />
            <div className="flex items-center gap-1 flex-wrap">
              {toolsToDisplay.map((item: any) => {
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
          </Link>
          <Link
            href={`/dashboard/projects/${project.name}/mvp`}
            className="text-end text-xs text-mytextlight font-body font-medium"
          >
            {project.createdAt}
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
