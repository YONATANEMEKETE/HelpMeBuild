'use client';
import { motion } from 'framer-motion';

export function GetStartedButton({ text = 'Hover me' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      style={{ transform: 'none' }}
    >
      <button className="group relative inline-block cursor-pointer rounded-full bg-mytext p-px font-semibold leading-6 text-mybg no-underline shadow-2xl shadow-myaccentlight">
        <span className="absolute inset-0 overflow-hidden rounded-full">
          <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            {' '}
          </span>{' '}
        </span>
        <div className="relative z-10 flex items-center space-x-2 rounded-full bg-mytext/50 px-6 py-3 ring-1 ring-white/10">
          <span>{text}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
            data-slot="icon"
            className="h-6 w-6 group-hover:translate-x-2 transition-transform duration-500"
          >
            <path
              fillRule="evenodd"
              d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
        <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-fuchsia-400/0 via-gray-400/90 to-fuchsia-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
      </button>
    </motion.div>
  );
}
