'use client';

import { Button } from '@/components/ui/button';
import { pinata } from '@/lib/pinata';
import useProjects from '@/stores/use-projects';
import { X } from 'lucide-react';
import Image from 'next/image';
import React, { useRef } from 'react';
import { toast } from 'sonner';
import { motion, useInView } from 'framer-motion';

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
    <motion.div
      initial={{ scale: 0.7, rotateX: 25 }}
      whileInView={{ scale: 1, rotateX: 0 }}
      viewport={{ once: false, margin: '300px' }}
      className="group relative overflow-clip w-full aspect-video rounded-xl"
    >
      <Image
        src={url}
        alt="visual"
        fill
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
    </motion.div>
  );
};

export default VisualCard;
