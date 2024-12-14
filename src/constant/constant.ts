import { House, ListTodo, BotMessageSquare } from 'lucide-react';
import {
  react,
  nextjs,
  angular,
  vue,
  svelte,
  vite,
  javascript,
  typescript,
  nuxt,
  skecth,
  figma,
  flutter,
  swift,
  kotlin,
  electron,
  vercel,
  netlify,
  aws,
  jest,
  cypress,
  tailwind,
  mui,
} from './icons';

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
    name: 'Mvp',
    link: 'mvp',
  },
  {
    name: 'Visuals',
    link: 'visuals',
  },
  {
    name: 'Techs',
    link: 'techstacks',
  },
  {
    name: 'Milestones',
    link: 'milestones',
  },
];

const techs = [
  {
    name: 'React',
    icon: react,
  },
  {
    name: 'Next.js',
    icon: nextjs,
  },
  {
    name: 'Angular',
    icon: angular,
  },
  {
    name: 'Vue',
    icon: vue,
  },
  {
    name: 'Svelte',
    icon: svelte,
  },
  {
    name: 'Vite',
    icon: vite,
  },
  {
    name: 'Javascript',
    icon: javascript,
  },
  {
    name: 'Typescript',
    icon: typescript,
  },
  {
    name: 'Nuxt',
    icon: nuxt,
  },
  {
    name: 'Sketch',
    icon: skecth,
  },
  {
    name: 'Figma',
    icon: figma,
  },
  {
    name: 'Flutter',
    icon: flutter,
  },
  {
    name: 'Swift',
    icon: swift,
  },
  {
    name: 'Kotlin',
    icon: kotlin,
  },
  {
    name: 'Electron',
    icon: electron,
  },
  {
    name: 'Vercel',
    icon: vercel,
  },
  {
    name: 'Netlify',
    icon: netlify,
  },
  {
    name: 'AWS',
    icon: aws,
  },
  {
    name: 'Jest',
    icon: jest,
  },
  {
    name: 'Cypress',
    icon: cypress,
  },
  {
    name: 'Tailwind',
    icon: tailwind,
  },
  {
    name: 'Material UI',
    icon: mui,
  },
];

export { navs, appearances, tabs, techs };
