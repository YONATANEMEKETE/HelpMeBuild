import React from 'react';

interface Props {
  name: string;
}

const Tags = ({ name }: Props) => {
  return (
    <div className="text-sm text-mytextlight font-body font-semibold px-3 py-1.5 rounded-full bg-mybg border cursor-pointer">
      {name}
    </div>
  );
};

export default Tags;
