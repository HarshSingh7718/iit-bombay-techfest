import type { Metadata } from 'next';
import { Space_Grotesk, Cinzel, Inter } from 'next/font/google';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['400', '600', '700', '900'],
  variable: '--font-cinzel',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
});

import SmoothScroller from '@/components/SmoothScroller';

export const metadata: Metadata = {
  title: 'Techfest 2026 | IIT Bombay — An Aetherial Renaissance',
  description:
    "Techfest 2026 — Asia's Largest Science & Technology Festival. Experience An Aetherial Renaissance at IIT Bombay. Events, Competitions, Workshops, Speaker Sessions.",
  keywords:
    'Techfest, IIT Bombay, Techfest 2026, Science Technology Festival, Competitions, Workshops, Aetherial Renaissance',
  authors: [{ name: 'Techfest, IIT Bombay' }],
  openGraph: {
    title: 'Techfest 2026 | IIT Bombay',
    description: "An Aetherial Renaissance — Asia's Largest Science & Technology Festival",
    url: 'https://techfest.org',
    siteName: 'Techfest IIT Bombay',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${cinzel.variable} ${inter.variable}`}>
      <body>
        <SmoothScroller>
          {children}
        </SmoothScroller>
      </body>
    </html>
  );
}
