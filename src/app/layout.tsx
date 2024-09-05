import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import '../styles/globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/sonner';
import BlurFade from '@/components/magicui/blur-fade';

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
          <BlurFade delay={0.04}>
            <Header />
          </BlurFade>
          <main className="grow">{children}</main>
          <Footer />
        </ThemeProvider>{' '}
        <Toaster />
      </body>
    </html>
  );
}
