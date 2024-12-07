import React from 'react';
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '../ui/sidebar';
import { navs } from '@/constant/navs';
import Link from 'next/link';

const MainNavs = () => {
  return (
    <SidebarGroup className="">
      <SidebarGroupLabel className="px-3 text-sm text-mytextlight/70 font-body font-medium mb-1">
        Main
      </SidebarGroupLabel>
      <SidebarMenu>
        {navs.map((nav) => (
          <SidebarMenuItem
            className="text-mytextlight hover:text-mytext"
            key={nav.name}
          >
            <SidebarMenuButton className="px-4" tooltip={nav.name} asChild>
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
    </SidebarGroup>
  );
};

export default MainNavs;
