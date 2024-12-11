import Image from 'next/image';
import React from 'react';
import DotPattern from '@/components/DotPatterns';

const NoFeatures = () => {
  return (
    <div className="relative overflow-clip flex-1 flex flex-col items-center justify-center">
      <DotPattern />
      <div className="-translate-y-10 text-center max-w-[300px]">
        <p className="text-3xl text-mytext font-body font-semibold">
          No Features Added
        </p>
        <p className="text-sm text-mytextlight font-body font-semibold">
          add a couple of features you want to include in your first release.
        </p>
      </div>
    </div>
  );
};

export default NoFeatures;
