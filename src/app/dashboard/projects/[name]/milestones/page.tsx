'use client';

import MilestonesList from '@/components/dashboard/Projects/milestones/MilestonesList';
import NoMilestones from '@/components/dashboard/Projects/milestones/NoMilestones';
import useProjects from '@/stores/use-projects';
import { useParams } from 'next/navigation';
import React from 'react';

const Milestones = () => {
  const { name } = useParams();
  const { projects } = useProjects();
  const currentProject = projects.find((project) => project.name === name);
  const milestones = currentProject?.milestones;

  return milestones?.length === 0 ? (
    <NoMilestones />
  ) : (
    <MilestonesList projectName={name as string} />
  );
};

export default Milestones;
