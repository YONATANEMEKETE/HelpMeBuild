import { House, ListTodo, BotMessageSquare } from 'lucide-react';

const navs = [
  {
    name: 'Home',
    href: '/dashboard/home',
    Icon: House,
  },
  {
    name: 'Ask AI',
    href: '/dashboard/chat',
    Icon: BotMessageSquare,
  },
  {
    name: 'Tasks',
    href: '/dashboard/tasks',
    Icon: ListTodo,
  },
];

const sampleProjects = [
  {
    name: 'QuickPrep',
    color: 'blue',
    link: '/dashboard/quickprep',
  },
  {
    name: 'SnapBuild',
    color: 'red',
    link: '/dashboard/snapbuild',
  },
];

export { sampleProjects, navs };
