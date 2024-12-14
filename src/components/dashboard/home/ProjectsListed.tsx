'use client';

import React from 'react';
import ProjectCard from './ProjectCard';
import useProjects from '@/stores/use-projects';
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion';

const ProjectsListed = () => {
  const { projects } = useProjects();

  const variants = {
    initial: { opacity: 0, scale: 0.9 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  return (
    <div className="grow bg-mybglight p-2 min-[400px]:p-4 rounded-lg">
      <motion.div
        variants={variants}
        initial="initial"
        animate="animate"
        className="flex flex-wrap gap-5 justify-center md:justify-start"
      >
        <LayoutGroup>
          <AnimatePresence>
            {projects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </AnimatePresence>
        </LayoutGroup>
      </motion.div>
    </div>
  );
};

export default ProjectsListed;
