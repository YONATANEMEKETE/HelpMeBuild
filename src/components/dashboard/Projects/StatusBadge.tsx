import { Check, CheckCircle2, Loader } from 'lucide-react';
import React from 'react';

const InProgress = () => {
  return (
    <div className="px-2 py-1 rounded-full bg-myaccentlight/10 text-xs text-myaccentlight font-body font-semibold flex items-center gap-x-2">
      <Loader size={12} />
      In-Progress
    </div>
  );
};

const Completed = () => {
  return (
    <div className="px-2 py-1 rounded-full bg-yellow-100 text-xs text-yellow-500 font-body font-semibold flex items-center gap-x-2">
      <CheckCircle2 size={12} />
      Completed
    </div>
  );
};

const Expired = () => {
  return (
    <div className="px-2 py-1 rounded-full bg-red-100 text-xs text-red-500 font-body font-semibold flex items-center gap-x-2">
      Due Date Passed
    </div>
  );
};

export { InProgress, Completed, Expired };
