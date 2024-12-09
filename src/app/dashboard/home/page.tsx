'use client';

import Empty from '@/components/dashboard/home/Empty';
import ProjectList from '@/components/dashboard/home/ProjectList';
import useProjects from '@/stores/use-projects';
import React from 'react';

const Home = () => {
  const { projects } = useProjects();

  return projects.length !== 0 ? <ProjectList /> : <Empty />;
};

export default Home;
