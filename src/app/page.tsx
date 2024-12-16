import DotPattern from '@/components/DotPatterns';
import Hero from '@/components/landingPage/Hero';
import { Button } from '@/components/ui/button';
import GridPattern from '@/components/ui/grid-pattern';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="relative overflow-clip">
      <GridPattern
        width={30}
        height={30}
        x={-1}
        y={-1}
        strokeDasharray={'4 2'}
        className={cn(
          '[mask-image:radial-gradient(700px_circle_at_center,white,transparent)] max-h-screen'
        )}
      />
      <Hero />
    </div>
  );
}
