'use client';

import { tabs } from '@/constant/constant';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

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
              pathName.includes(tab.link)
                ? 'text-mybg'
                : 'text-mytextlight hover:text-mytext hover:bg-myaccentlight/10'
            }  font-body font-semibold cursor-pointer overflow-hidden`}
          >
            {pathName.includes(tab.link) && (
              <AnimatePresence>
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{
                    type: 'spring',
                    stiffness: 400,
                    damping: 18,
                    bounce: 0.15,
                  }}
                  className="absolute inset-0 bg-myaccentlight/80"
                ></motion.div>
              </AnimatePresence>
            )}
            <p className="z-20 relative text-center">{tab.name}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default Tabs;
