'use client';

import { tabs } from '@/constant/constant';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { motion } from 'motion/react';

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
            className={`relative w-[100px] py-2 rounded-md text-sm ${
              pathName.includes(tab.link) ? 'text-mytext' : 'text-mytextlight'
            } hover:text-mytext font-body font-semibold cursor-pointer overflow-hidden`}
          >
            {pathName.includes(tab.link) && (
              <motion.div
                style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundColor: 'white',
                }}
              ></motion.div>
            )}
            <p className="z-20 relative text-center">{tab.name}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default Tabs;
