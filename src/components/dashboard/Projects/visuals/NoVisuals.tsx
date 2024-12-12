import DotPattern from '@/components/DotPatterns';

import { Plus, UploadCloud } from 'lucide-react';
import React from 'react';
import AddVisualsForm from './AddVisualsForm';
import UploadDialog from './uploadDialog';

const NoVisuals = () => {
  return (
    <div className="h-full flex items-center justify-center gap-y-6 relative">
      <DotPattern />
      <div className="flex flex-col items-center gap-y-6 z-50 max-w-[400px]">
        <div className="flex flex-col items-center gap-y-2">
          <UploadCloud size={60} className="text-mytext/80" />
          <div className="text-center">
            <p className="text-2xl text-mytext font-body font-semibold">
              No Visuals!
            </p>
            <p className="text-sm text-mytextlight font-body font-semibold">
              upload images of your interfaces, inspirations to steal from or
              wireframes.
            </p>
          </div>
        </div>
        <UploadDialog />
      </div>
    </div>
  );
};

export default NoVisuals;
