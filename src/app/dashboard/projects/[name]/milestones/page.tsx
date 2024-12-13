'use client';

import MilestonesList from '@/components/dashboard/Projects/milestones/MilestonesList';
import NoMilestones from '@/components/dashboard/Projects/milestones/NoMilestones';
import { useParams } from 'next/navigation';
import React from 'react';

const Milestones = () => {
  const { name } = useParams();

  return <NoMilestones />;
  // return <MilestonesList projectName={name as string} />;
};

export default Milestones;
