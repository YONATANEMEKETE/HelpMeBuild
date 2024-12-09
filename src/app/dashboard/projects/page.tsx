import { redirect } from 'next/navigation';
import React from 'react';

const Projects = () => {
  redirect('/dashboard/home');

  return <div>Projects</div>;
};

export default Projects;
