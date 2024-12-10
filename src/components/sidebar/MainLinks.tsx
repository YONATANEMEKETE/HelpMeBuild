'use client';

import React from 'react';
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '../ui/sidebar';
import Link from 'next/link';
import { navs } from '@/constant/constant';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const MainLinks = () => {
  const pathname = usePathname();

  return (
    <SidebarMenu>
      {navs.map((nav) => (
        <SidebarMenuItem
          className="text-mytextlight hover:text-mytext"
          key={nav.name}
        >
          <SidebarMenuButton
            className={`px-4 ${pathname === nav.href && 'bg-mybglight'}`}
            tooltip={nav.name}
            asChild
          >
            <Link
              href={nav.href}
              className="flex items-center gap-x-2 size-full"
            >
              <nav.Icon size={18} className="" />
              <span className="text-xs font-body font-semibold">
                {nav.name}
              </span>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  );
};

export default MainLinks;
