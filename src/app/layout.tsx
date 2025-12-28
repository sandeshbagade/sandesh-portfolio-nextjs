import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { ThemeProvider } from '@/components/layout/ThemeProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://sandeshbagade.com'),
  title: 'Sandesh Bagade | Full Stack Developer & Creative Soul',
  description:
    'Welcome to my personal space! I\'m Sandesh Bagade, a Freelance Full Stack Web Developer working with clients from US, Canada, and Singapore. Passionate about building amazing web experiences, playing pickleball, making music with my flute, and capturing life through photography.',
  keywords: [
    'Sandesh Bagade',
    'Full Stack Developer',
    'Freelance Web Developer',
    'React Developer',
    'Next.js Developer',
    'JavaScript Developer',
    'Python Developer',
    'NodeJS Developer',
    'Pickleball',
    'Flute Player',
    'Photography',
    'Mumbai',
    'India',
  ],
  authors: [{ name: 'Sandesh Bagade' }],
  creator: 'Sandesh Bagade',
  openGraph: {
    title: 'Sandesh Bagade | Full Stack Developer & Creative Soul',
    description:
      'Freelance Full Stack Web Developer | Pickleball Enthusiast | Flute Player | Photography Lover',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={`${inter.className} bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100`}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='light'
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className='min-h-screen pt-20'>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
