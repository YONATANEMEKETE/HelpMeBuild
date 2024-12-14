'use client';

import React from 'react';
import ProjectCard from './ProjectCard';
import useProjects from '@/stores/use-projects';

const ProjectsListed = () => {
  const { projects } = useProjects();

  return (
    <div className="grow bg-mybglight  p-4 rounded-lg">
      <div className="flex flex-wrap gap-5">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsListed;
