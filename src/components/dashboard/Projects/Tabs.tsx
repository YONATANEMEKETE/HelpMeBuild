'use client';

import { tabs } from '@/constant/constant';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

interface Props {
  project: string;
}

const Tabs = ({ project }: Props) => {
  const pathName = usePathname();

  return (
    <div className="bg-mybglight/60 p-1 rounded-md w-fit flex items-center gap-1">
      {tabs.map((tab) => {
        return (
          <Link
            href={`${tab.link}`}
            key={tab.name}
            className={`${
              pathName.includes(tab.link) ? 'bg-mybg text-mytext' : ''
            } px-4 py-2 rounded-md text-sm text-mytextlight hover:text-mytext font-body font-semibold cursor-pointer`}
          >
            {tab.name}
          </Link>
        );
      })}
    </div>
  );
};

export default Tabs;
