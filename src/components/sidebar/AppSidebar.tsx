import React from 'react';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from '../ui/sidebar';
import Header from './header';
import MainNavs from './MainNavs';
import { Separator } from '../ui/separator';
import ProjectsNav from './ProjectsNav';
import Footer from './Footer';

const DashbaordSidebar = () => {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="bg-mybg py-0 px-2">
        <Header />
      </SidebarHeader>
      <SidebarContent className="bg-mybg">
        <MainNavs />
        <div className="w-full px-4 mt-10">
          <Separator className="" />
        </div>
        <ProjectsNav />
      </SidebarContent>
      <SidebarFooter className="bg-mybg">
        <Footer />
      </SidebarFooter>
    </Sidebar>
  );
};

export default DashbaordSidebar;
