import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Mona_Sans, Genos } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/sonner';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

const monaSans = Mona_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  fallback: ['Arial', 'sans-serif'],
});

const genos = Genos({
  subsets: ['latin'],
  variable: '--font-logo',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'SnapBuild - Project Roadmap for Frontend Developers',
  description:
    'SnapBuild helps frontend developers organize and execute projects successfully. Define goals, manage features, track milestones, add visuals, and choose tech stacks—all in one tool.',
  openGraph: {
    type: 'website',
    title: 'SnapBuild - Project Roadmap for Frontend Developers',
    description:
      'Simplify project creation with SnapBuild—a tool designed for frontend developers to plan, manage, and execute projects efficiently.',
    images: 'https://ik.imagekit.io/6qizpphtd1/OgImages/753shots_so.png',
    url: 'https://snap-build.vercel.app',
    locale: 'en_US',
    siteName: 'SnapBuild',
  },
  keywords: [
    'Frontend project management',
    'Developer roadmap tool',
    'Milestone tracking',
    'Feature management',
    'Tech stack organization',
    'SnapBuild',
    'Frontend development',
  ],
  authors: [
    {
      name: 'YONATANE MEKETE',
      url: 'https://www.linkedin.com/in/yonatanemekete',
    },
  ],
  creator: 'YONATANE MEKETE',
  applicationName: 'SnapBuild',
  category: 'productivity',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${monaSans.variable} ${genos.variable} antialiased`}
      >
        {children}
        <Toaster position="top-right" richColors closeButton />
      </body>
    </html>
  );
}
