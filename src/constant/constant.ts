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

const appearances = ['#21211f', '#e32999', '#5729e3', '#29e386', '#e1f0e9'];

const tabs = [
  {
    name: 'MVP',
    link: 'mvp',
  },
  {
    name: 'Visuals',
    link: 'visuals',
  },
  {
    name: 'TechStacks',
    link: 'techstacks',
  },
  {
    name: 'Milestones',
    link: 'milestones',
  },
];

const techs = [{}];

export { navs, appearances, tabs };
