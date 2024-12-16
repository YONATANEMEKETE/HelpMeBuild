'use client';

import React from 'react';
import WordRotate from '../ui/word-rotate';
import { GetStartedButton } from './GetStartedButton';
import Link from 'next/link';
import BlurIn from '../ui/blur-in';
import { motion } from 'framer-motion';
import HeroMockups from './HeroMockups';

const HeroContent = () => {
  return (
    <div className="w-full min-h-screen pt-20 flex flex-col items-center gap-y-32">
      <div className="flex flex-col items-center gap-y-10">
        <div className="space-y-4 flex flex-col items-center">
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-x-2">
              {/* <p className="text-6xl text-mytext font-body font-bold text-center">
                Build
              </p> */}
              <BlurIn
                word="Build"
                className="text-6xl text-mytext font-body font-bold"
              />
              <div className="w-[190px]">
                <WordRotate
                  duration={5000}
                  words={['Better', 'Faster', 'Easier']}
                  className="text-6xl text-mytext font-body font-bold"
                />
              </div>
            </div>
            {/* subtitle */}
            <BlurIn
              word="One Step at a Time"
              className="text-6xl text-myaccentdark font-body font-extrabold"
            />
            {/* <p className="text-6xl text-myaccentdark font-body font-extrabold">
              One Step at a Time
            </p> */}
          </div>
          {/* description */}
          <motion.p
            initial={{ opacity: 0, y: 20, filter: 'blur(5px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.5 }}
            className="max-w-[600px] text-center text-mytextlight text-base font-body font-semibold"
          >
            Plan smarter, stay organized, and bring your ideas to life with our
            all-in-one project planning tool for{' '}
            <span className="underline decoration-myaccent decoration-wavy">
              Frontend developers.
            </span>
          </motion.p>
        </div>
        {/* button */}
        <Link href="/dashboard" className="">
          <GetStartedButton text="Get Started" />
        </Link>
      </div>
      <HeroMockups />
    </div>
  );
};

export default HeroContent;
