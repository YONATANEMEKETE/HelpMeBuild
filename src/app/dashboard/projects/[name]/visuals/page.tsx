import NoVisuals from '@/components/dashboard/Projects/visuals/NoVisuals';
import VisualsList from '@/components/dashboard/Projects/visuals/VisualsList';
import React from 'react';

const Visuals = () => {
  return (
    <section className="grow">
      {/* <NoVisuals /> */}
      <VisualsList />
    </section>
  );
};

export default Visuals;
