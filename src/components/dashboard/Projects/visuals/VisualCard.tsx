'use client';

import { Button } from '@/components/ui/button';
import { pinata } from '@/lib/pinata';
import useProjects from '@/stores/use-projects';
import { X } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import { toast } from 'sonner';

interface Props {
  url: string;
  projectName: string;
}

const VisualCard = ({ url, projectName }: Props) => {
  const { deleteVisuals } = useProjects();

  const handleFileDelete = async () => {
    deleteVisuals(projectName, url);
    await pinata.unpin([url]);
    toast.success('visual deleted successfuly');
  };

  return (
    <div className="group relative overflow-clip w-full aspect-video rounded-xl">
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
        onClick={handleFileDelete}
        className="opacity-0 group-hover:opacity-100 absolute top-4 right-4  text-myaccentdark bg-mybg hover:bg-mybglight hover:text-myaccentdark"
      >
        <X size={16} />
      </Button>
    </div>
  );
};

export default VisualCard;
