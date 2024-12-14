'use client';

import React from 'react';
import FeatureCard from './FeatureCard';
import useProjects, { featureState } from '@/stores/use-projects';
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion';

interface Props {
  projectName: string;
}

const FeaturesList = ({ projectName }: Props) => {
  const { projects } = useProjects();
  const currentProject = projects.find(
    (project) => project.name === projectName
  );
  const features = currentProject?.features;

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
    <motion.section
      variants={variants}
      initial="initial"
      animate="animate"
      className="flex flex-col gap-2 w-full min-[500px]:p-4 p-2 grow rounded-lg bg-mybglight"
    >
      <LayoutGroup>
        <AnimatePresence>
          {features?.map((feature) => {
            return (
              <FeatureCard
                key={feature.name}
                feature={feature}
                projectName={projectName}
              />
            );
          })}
        </AnimatePresence>
      </LayoutGroup>
    </motion.section>
  );
};

export default FeaturesList;
