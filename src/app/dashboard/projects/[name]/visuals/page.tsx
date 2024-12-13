'use client';

import NoVisuals from '@/components/dashboard/Projects/visuals/NoVisuals';
import VisualsList from '@/components/dashboard/Projects/visuals/VisualsList';
import useProjects from '@/stores/use-projects';
import { useParams } from 'next/navigation';
import React from 'react';

const Visuals = () => {
  const { name } = useParams();
  const { projects } = useProjects();
  const currentProject = projects.find((project) => project.name === name);
  const visuals = currentProject?.visuals;

  return (
    <section className="grow">
      {visuals?.length !== 0 ? <VisualsList /> : <NoVisuals />}
    </section>
  );
};

export default Visuals;
