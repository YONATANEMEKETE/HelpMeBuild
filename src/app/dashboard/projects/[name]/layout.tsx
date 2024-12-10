import Tabs from '@/components/dashboard/Projects/Tabs';
import React from 'react';

interface ProjectsLayoutProps {
  children: React.ReactNode;
  params: Promise<{ name: string }>;
}

const ProjectsLayout = async ({ children, params }: ProjectsLayoutProps) => {
  const projectName = (await params).name;

  return (
    <section className="min-h-[93vh] px-10 pt-10 pb-4 flex flex-col gap-y-4">
      <div className="space-y-4 pb-4 border-b">
        <p className="text-2xl text-mytext font-body font-semibold pl-1">
          {projectName}
        </p>
        <Tabs project={projectName} />
      </div>
      {children}
    </section>
  );
};

export default ProjectsLayout;
