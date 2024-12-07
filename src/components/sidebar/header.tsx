'use client';

import Image from 'next/image';
import React from 'react';
import logo from '../../../public/logo.png';
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '../ui/sidebar';
import Link from 'next/link';

const Header = () => {
  const { state } = useSidebar();

  return (
    <SidebarMenu className="">
      <SidebarMenuItem className="w-full py-2">
        <SidebarMenuButton
          size={'lg'}
          className={`py-8 ${
            state === 'expanded' ? 'bg-mybglight' : 'bg-mybg hover:bg-mybg'
          }`}
          asChild
        >
          <Link href={'/'} className="flex items-center gap-x-1 cursor-pointer">
            <Image
              src={logo}
              alt="logo image"
              className="object-contain size-10 rounded-lg"
            />
            <p className="text-mytext text-2xl font-body font-bold">
              Snap<span className="text-myaccent">Build</span>.
            </p>
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
};

export default Header;
