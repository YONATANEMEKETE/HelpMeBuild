import React from 'react';
import { Button } from './ui/button';
import buildingSvg from '../../public/undraw_building_blocks_re_5ahy.svg';
import Image from 'next/image';
import DotPattern from './DotPatterns';
import Link from 'next/link';

interface Props {
  backlink: string;
}

const UnderDevelopment = ({ backlink }: Props) => {
  return (
    <div className="grow relative flex items-center justify-center">
      <DotPattern />
      <div className="flex flex-col items-center gap-y-6 z-50 max-w-[500px]">
        <Image
          src={buildingSvg}
          alt="building svg"
          width={400}
          height={400}
          className="w-full"
        />
        <Link href={backlink}>
          <Button
            variant={'outline'}
            className="text-mytext text-sm hover:bg-mybg font-body font-semibold"
          >
            Back to Dashboard
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default UnderDevelopment;
