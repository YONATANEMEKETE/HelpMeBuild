import React from 'react';
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '../ui/sidebar';
import { navs } from '@/constant/constant';
import Link from 'next/link';
import MainLinks from './MainLinks';

const MainNavs = () => {
  return (
    <SidebarGroup className="">
      <SidebarGroupLabel className="px-3 text-sm text-mytextlight/70 font-body font-medium mb-1">
        Main
      </SidebarGroupLabel>
      <MainLinks />
    </SidebarGroup>
  );
};

export default MainNavs;
