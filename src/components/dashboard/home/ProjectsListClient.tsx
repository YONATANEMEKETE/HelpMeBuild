'use client';

import React from 'react';
import ProjectCard from './ProjectCard';
import useProjects from '@/stores/use-projects';

const ProjectsListClient = () => {
  const { projects } = useProjects();

  return (
    <div className="flex grow bg-mybglight/60 flex-wrap gap-x-5 p-4 rounded-lg">
      {projects.map((project) => (
        <ProjectCard key={project.name} project={project} />
      ))}
    </div>
  );
};

export default ProjectsListClient;
