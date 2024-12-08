import { Input } from '@/components/ui/input';
import { appearances } from '@/constant/constant';
import useColor from '@/stores/use-color';
import React, { useState } from 'react';

const Appearance = () => {
  const { color, setColor } = useColor();
  const [selected, setSelected] = useState(color);

  const handleColorChange = (color: string) => {
    setColor(color);
    setSelected(color);
  };

  return (
    <div className="space-y-2 w-full px-1">
      <p className="text-sm text-mytext font-body font-semibold">Appearance</p>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-2 px-1">
          {appearances.map((appearance) => {
            let ring = '';

            if (appearance === '#21211f') {
              ring = 'ring-[#21211f]';
            } else if (appearance === '#e32999') {
              ring = 'ring-[#e32999]';
            } else if (appearance === '#5729e3') {
              ring = 'ring-[#5729e3]';
            } else if (appearance === '#29e386') {
              ring = 'ring-[#29e386]';
            } else if (appearance === '#e1f0e9') {
              ring = 'ring-[#e1f0e9]';
            }

            return (
              <div
                onClick={() => handleColorChange(appearance)}
                key={appearance}
                style={{
                  backgroundColor: appearance,
                }}
                className={`size-5 cursor-pointer ${
                  selected === appearance
                    ? `ring-2 ring-mytext ring-offset-1 ${ring}`
                    : ''
                }    rounded-full`}
              ></div>
            );
          })}
        </div>
        <div className="flex items-center gap-x-1">
          <p className="text-sm text-mytextlight font-body font-semibold">
            Custom
          </p>
          <Input
            onChange={(e) => handleColorChange(e.target.value)}
            placeholder="#FF0000"
            className="max-w-24 placeholder:text-xs placeholder:font-body placeholder:font-semibold text-xs text-mytextlight font-body font-semibold"
          />
        </div>
      </div>
    </div>
  );
};

export default Appearance;
