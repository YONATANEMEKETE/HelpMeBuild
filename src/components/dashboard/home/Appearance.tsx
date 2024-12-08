import { Input } from '@/components/ui/input';
import { appearances } from '@/constant/constant';
import React from 'react';

const Appearance = () => {
  return (
    <div className="space-y-2 w-full px-1">
      <p className="text-sm text-mytext font-body font-semibold">Appearance</p>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-2 px-1">
          {appearances.map((appearance) => {
            const color = appearance;

            return (
              <div
                key={appearance}
                style={{
                  backgroundColor: color,
                }}
                className={`size-5 cursor-pointer ${color} rounded-full`}
              ></div>
            );
          })}
        </div>
        <div className="flex items-center gap-x-1">
          <p className="text-sm text-mytextlight font-body font-semibold">
            Custom
          </p>
          <Input
            placeholder="#FF0000"
            className="max-w-24 placeholder:text-xs placeholder:font-body placeholder:font-semibold text-xs text-mytextlight font-body font-semibold"
          />
        </div>
      </div>
    </div>
  );
};

export default Appearance;
