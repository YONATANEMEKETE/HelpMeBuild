import React from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';

interface InteractiveHoverButtonProps {
  text?: string;
  className?: string;
}

export function DashboardButton({
  text = 'Button',
  className,
}: InteractiveHoverButtonProps = {}) {
  return (
    <div
      className={`group relative w-24 md:w-32 cursor-pointer overflow-hidden rounded-full border bg-white p-2 px-2.5 text-center font-semibold text-black ${className}`}
    >
      <span className="inline-block translate-x-1 transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
        {text}
      </span>
      <div className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-white opacity-0 transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100">
        <span>{text}</span>
        <ChevronRight size={16} strokeWidth={2} />
      </div>
      <div className="absolute left-[5%] md:left-[12%] top-[35%] md:top-[40%] h-2 w-2 scale-[1] rounded-lg bg-black transition-all duration-300 group-hover:left-[0%] group-hover:top-[0%] group-hover:h-full group-hover:w-full group-hover:scale-[1.8] group-hover:bg-myaccentlight dark:group-hover:bg-fuchsia-700"></div>
    </div>
  );
}
