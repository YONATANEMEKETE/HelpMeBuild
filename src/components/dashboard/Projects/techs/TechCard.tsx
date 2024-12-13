import { Plus, X } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

interface Props {
  tech: {
    name: string;
    icon: any;
  };
}

const TechCard = ({ tech }: Props) => {
  return (
    <div className="group relative px-2 py-1 rounded-sm bg-mybg border border-mybglight flex items-center gap-x-2 cursor-pointer">
      <Image src={tech.icon} alt={tech.name} width={24} height={24} />
      <p className="text-sm text-mytext font-body font-semibold">{tech.name}</p>
      <div className="absolute top-1 right-1 w-3 h-3 rounded-sm grid place-content-center cursor-pointer bg-mybglight opacity-0 group-hover:opacity-100">
        <X size={12} />
      </div>
    </div>
  );
};

export default TechCard;
