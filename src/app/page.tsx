import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="grid place-content-center h-screen text-center bg-mybg">
      <p className="text-base text-mytext font-body font-semibold mb-4">
        Go to Dashboard
      </p>
      <Link href={'/dashboard'}>
        <Button
          size={'lg'}
          className="bg-gradient-to-br from-mytext/60 to-mytext text-base text-mybg font-body font-semibold"
        >
          Dashboard
        </Button>
      </Link>
    </div>
  );
}
