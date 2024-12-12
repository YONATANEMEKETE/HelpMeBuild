'use client';
import React from 'react';
import UploadDialog from './uploadDialog';
import VisualCard from './VisualCard';
import useProjects from '@/stores/use-projects';
import { useParams } from 'next/navigation';

const VisualsList = () => {
  const { projects } = useProjects();
  const params = useParams();
  const { name } = params;
  const currentProject = projects.find((project) => project.name === name);
  const visuals = currentProject?.visuals;

  return (
    <div className="h-full flex flex-col gap-y-4">
      <div className="flex justify-end">
        <UploadDialog buttonOutline />
      </div>
      <div className="flex flex-col gap-y-4">
        {visuals?.map((visual, index) => (
          <VisualCard key={visual} url={visual} projectName={name as string} />
        ))}
      </div>
    </div>
  );
};

export default VisualsList;
