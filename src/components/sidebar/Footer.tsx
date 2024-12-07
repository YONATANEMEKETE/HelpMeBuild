'use client';

import React from 'react';
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '../ui/sidebar';
import Link from 'next/link';
import Image from 'next/image';
import githublogo from '../../../public/github.svg';

const Footer = () => {
  const { state } = useSidebar();

  return (
    <SidebarMenu>
      <SidebarMenuItem
        className="w-full py-2
      "
      >
        <SidebarMenuButton
          size={'lg'}
          className={` ${
            state === 'expanded' ? 'bg-mybglight' : 'bg-mybg hover:bg-mybg'
          }`}
          asChild
        >
          <Link
            href={'https://github.com/YONATANEMEKETE/SnapBuild'}
            target="_blank"
            className="flex items-center gap-x-4 cursor-pointer"
          >
            <Image
              src={githublogo}
              alt="github logo"
              className={`object-contain ${
                state === 'expanded' ? 'size-6' : 'size-8'
              }`}
            />
            <p className="text-sm font-body font-semibold underline">
              Github repository
            </p>
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
};

export default Footer;
