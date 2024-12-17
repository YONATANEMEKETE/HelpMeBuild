'use client';
import React from 'react';
import Container from '../Container';
import Link from 'next/link';
import { DashboardButton } from './DashboardButton';
import { Separator } from '../ui/separator';
import featureMockupone from '../../../public/353shots_so.png';
import featureMockuptwo from '../../../public/677shots_so.png';
import ShinyButton from '../ui/shiny-button';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';

const variants = {
  hide: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, delay: 0.5, staggerChildren: 0.5 },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 1, delay: 0.5, staggerChildren: 0.5 },
  },
};

const Features = () => {
  return (
    <Container className="flex flex-col gap-y-16 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20, filter: 'blur(5px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between px-2"
      >
        <div className="text-mytext text-4xl font-body font-semibold">
          <h1>Stream Your</h1>
          <h1>Development Journey</h1>
        </div>
        <Link href={'/dashboard'}>
          <ShinyButton className="text-base text-mytext font-body font-semibold">
            Dashboard
          </ShinyButton>
        </Link>
      </motion.div>
      <div className="space-y-5">
        <AnimatePresence>
          <motion.div
            variants={variants}
            initial="hide"
            whileInView={'show'}
            className="flex items-center justify-between px-2"
          >
            <motion.div variants={variants} className="w-[49%] h-auto">
              <Image
                src={featureMockupone}
                alt="feature mockup one"
                className="size-full"
              />
            </motion.div>
            <motion.div variants={variants} className="w-[49%] h-auto">
              <Image
                src={featureMockuptwo}
                alt="feature mockup two"
                className="size-full"
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>
        <Separator className="w-[97%] mx-auto" />
        <motion.div
          variants={variants}
          initial="hide"
          whileInView={'show'}
          className="flex justify-between px-2"
        >
          <motion.div variants={variants} className="w-[30%] space-y-2 pl-2">
            <h2 className="text-xl font-body font-semibold text-mytext">
              Feature Management
            </h2>
            <p className="text-sm font-body font-semibold text-mytextlight">
              Add and Manage features for clear Development Focus
            </p>
          </motion.div>
          <Separator orientation="vertical" className="h-20" />
          <motion.div variants={variants} className="w-[30%] space-y-2 pl-2">
            <h2 className="text-xl font-body font-semibold text-mytext">
              Visual Planning
            </h2>
            <p className="text-sm font-body font-semibold text-mytextlight">
              Upload and manage UI designs, inspirations, and wireframes
            </p>
          </motion.div>
          <Separator orientation="vertical" className="h-20" />
          <motion.div variants={variants} className="w-[30%] space-y-2 pl-2">
            <h2 className="text-xl font-body font-semibold text-mytext">
              Milestone Tracking
            </h2>
            <p className="text-sm font-body font-semibold text-mytextlight">
              Break features into actionable milestones
            </p>
          </motion.div>
        </motion.div>
      </div>
    </Container>
  );
};

export default Features;
