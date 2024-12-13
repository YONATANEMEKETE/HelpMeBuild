import useProjects from '@/stores/use-projects';
import React from 'react';
import FeatureCard from '../mvp/FeatureCard';
import MilestoneCard from './MilestoneCard';

interface Props {
  projectName: string;
}

const MilestonesList = ({ projectName }: Props) => {
  const { projects } = useProjects();
  const currentProject = projects.find(
    (project) => project.name === projectName
  );
  const milestones = currentProject?.features;

  return (
    <section className="flex flex-col gap-2 w-full px-2">
      {milestones?.map((milestone) => {
        return (
          <MilestoneCard milestone={milestone} projectName={projectName} />
        );
      })}
    </section>
  );
};

export default MilestonesList;
