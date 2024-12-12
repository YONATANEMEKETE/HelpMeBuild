'use client';

import { Button } from '@/components/ui/button';
import useProjects from '@/stores/use-projects';
import { X } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

interface Props {
  url: string;
  projectName: string;
}

const VisualCard = ({ url, projectName }: Props) => {
  const { deleteVisuals } = useProjects();

  return (
    <div className="group relative overflow-clip w-full aspect-[20/10] rounded-xl">
      <Image
        src={url}
        alt="visual"
        fill
        quality={100}
        loading="lazy"
        className="object-cover"
      />
      <Button
        variant={'outline'}
        onClick={() => deleteVisuals(projectName, url)}
        className="opacity-0 group-hover:opacity-100 absolute top-4 right-4  text-myaccentdark bg-myaccentlight/10 hover:bg-myaccentlight/10 hover:text-myaccentdark"
      >
        <X size={16} />
      </Button>
    </div>
  );
};

export default VisualCard;
