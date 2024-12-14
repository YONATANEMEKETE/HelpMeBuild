'use client';

import DotPattern from '@/components/DotPatterns';

import { Plus, UploadCloud } from 'lucide-react';
import React from 'react';
import AddVisualsForm from './AddVisualsForm';
import UploadDialog from './uploadDialog';
import { motion } from 'framer-motion';

const NoVisuals = () => {
  return (
    <div className="h-full flex items-center justify-center gap-y-6 relative">
      <DotPattern />
      <div className="flex flex-col items-center gap-y-6 z-50 max-w-[250px] md:max-w-[400px]">
        <motion.div className="flex flex-col items-center gap-y-2">
          <UploadCloud size={60} className="text-mytext/80" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="text-center"
          >
            <p className="text-lg md:text-2xl text-mytext font-body font-bold">
              No Visuals!
            </p>
            <p className="text-xs md:text-sm text-mytextlight font-body font-semibold">
              upload images of your interfaces, inspirations to steal from or
              wireframes.
            </p>
          </motion.div>
        </motion.div>
        <UploadDialog />
      </div>
    </div>
  );
};

export default NoVisuals;
