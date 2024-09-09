import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';

import { Analytics } from '@vercel/analytics/react';

import { ThemeProvider } from '@/components/theme-provider';
import Footer from '@/components/footer';
import { Toaster } from '@/components/ui/sonner';

import { cn } from '@/lib/utils';

import '../styles/globals.css';
import Navbar from '@/components/navbar';
import { TooltipProvider } from '@/components/ui/tooltip';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
});

export const metadata: Metadata = {
  title: {
    template: '%s | Denis Pianelli',
    default: 'Denis Pianelli',
  },
  description:
    'Welcome to my portfolio! I’m a passionate full-stack developer with expertise in Next.js, creating seamless and high-performance web applications. Explore my work to see how I bring ideas to life through clean code and innovative solutions.',
  metadataBase: new URL('https://next-portfolio-swart-xi.vercel.app/'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'flex min-h-screen flex-col font-sans antialiased',
          inter.variable,
          playfairDisplay.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider delayDuration={0}>
            <main className="grow">{children}</main>
            <Navbar />
            <Footer />
          </TooltipProvider>
        </ThemeProvider>{' '}
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
