'use client';

import {
  MoreHorizontal,
  MoreVertical,
  Plus,
  Sidebar,
  Trash2,
} from 'lucide-react';
import React from 'react';
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '../ui/sidebar';
import { sampleProjects } from '@/constant/constant';
import Link from 'next/link';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { Button } from '../ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';
import CreateForm from '../dashboard/home/CreateForm';

const ProjectsNav = () => {
  const { isMobile } = useSidebar();

  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden space-y-1">
      <SidebarGroupLabel className="px-3 text-sm text-mytextlight/70 font-body font-medium mb-1">
        Projects
      </SidebarGroupLabel>
      <SidebarMenu>
        {sampleProjects.map((project) => (
          <SidebarMenuItem
            className="text-mytextlight hover:text-mytext"
            key={project.name}
          >
            <SidebarMenuButton className="px-4" tooltip={project.name} asChild>
              <Link
                className="flex items-center gap-x-2 size-full"
                href={project.link}
              >
                <div className="size-3 rounded-sm bg-blue-700"></div>
                <span className="text-xs font-body font-semibold">
                  {project.name}
                </span>
              </Link>
            </SidebarMenuButton>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuAction>
                  <MoreVertical size={14} />
                  <span className="sr-only">More</span>
                </SidebarMenuAction>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-48 rounded-lg"
                side={isMobile ? 'bottom' : 'right'}
                align={isMobile ? 'end' : 'start'}
              >
                <DropdownMenuItem className="cursor-pointer text-mytextlight hover:text-mytext hover:bg-mybglight">
                  <Trash2 className="" />
                  <span className="text-sm font-body font-semibold">
                    Delete Project
                  </span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>

      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant={'ghost'}
            className="flex items-center justify-start gap-x-2 text-mytextlight hover:text-mytext"
          >
            <Plus />
            <p className="text-xs font-semibold font-body">New Project</p>
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-[400px] space-y-4">
          <DialogHeader>
            <DialogTitle className="text-mytext font-body font-semibold">
              Create a Project
            </DialogTitle>
          </DialogHeader>
          <CreateForm />
        </DialogContent>
      </Dialog>
    </SidebarGroup>
  );
};

export default ProjectsNav;
