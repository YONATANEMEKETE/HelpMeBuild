import React from 'react';
import FeatureCard from './FeatureCard';
import useProjects, { featureState } from '@/stores/use-projects';

interface Props {
  projectName: string;
}

const FeaturesList = ({ projectName }: Props) => {
  const { projects } = useProjects();
  const currentProject = projects.find(
    (project) => project.name === projectName
  );
  const features = currentProject?.features;

  return (
    <section className="flex flex-col gap-2 w-full p-4 grow rounded-lg bg-mybglight">
      {features?.map((feature) => {
        return (
          <FeatureCard
            key={feature.name}
            feature={feature}
            projectName={projectName}
          />
        );
      })}
    </section>
  );
};

export default FeaturesList;
