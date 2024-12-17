import Features from '@/components/landingPage/Features';
import Footer from '@/components/landingPage/Footer';
import Hero from '@/components/landingPage/Hero';
import { Button } from '@/components/ui/button';
import GridPattern from '@/components/ui/grid-pattern';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { ReactLenis } from '../lib/lenis';

export default function Home() {
  return (
    <div className="relative overflow-clip pb-16">
      <ReactLenis root>
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
        <Footer />
      </ReactLenis>
      {/* rebuild it again. may be */}
      {/* <Features />  */}
    </div>
  );
}
