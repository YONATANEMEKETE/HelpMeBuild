import { redirect } from 'next/navigation';
import React from 'react';

const Project = async ({ params }: { params: Promise<{ name: string }> }) => {
  const projectName = (await params).name;

  redirect(`/dashboard/projects/${projectName}/mvp`);

  return <div>SnapBuild</div>;
};

export default Project;
