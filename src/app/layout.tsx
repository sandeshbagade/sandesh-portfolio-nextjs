import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { ThemeProvider } from '@/components/layout/ThemeProvider';
import { LanguageProvider } from '@/lib/LanguageContext';
import GoogleAnalytics from '@/components/GoogleAnalytics';

const inter = Inter({ subsets: ['latin'] });

// Add your Google Analytics Measurement ID here
// Get it from: https://analytics.google.com/
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '';

export const metadata: Metadata = {
  metadataBase: new URL('https://sandeshbagade.com'),
  title: 'Sandesh Bagade | Web Developer, Stock Investor & Pickleball Player',
  description:
    'Hey! I\'m Sandesh from Pune who loves building websites, analyzing stocks, discussing geopolitics, and playing pickleball. This is my personal space where I share my work, hobbies, and life!',
  keywords: [
    'Sandesh Bagade',
    'Web Developer Pune',
    'Freelance Developer',
    'Stock Market Investor',
    'Geopolitics',
    'Pickleball Pune',
    'Flute Player',
    'React Developer',
    'Next.js',
    'JavaScript',
    'Python',
    'NodeJS',
    'NIT Trichy',
    'Pune',
    'India',
  ],
  authors: [{ name: 'Sandesh Bagade' }],
  creator: 'Sandesh Bagade',
  openGraph: {
    title: 'Sandesh Bagade | Web Developer, Stock Investor & Pickleball Player',
    description:
      'Web Developer | Stock Market Investor | Geopolitics Enthusiast | Pickleball Player | Flute Lover',
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
        {GA_MEASUREMENT_ID && <GoogleAnalytics GA_MEASUREMENT_ID={GA_MEASUREMENT_ID} />}
        <ThemeProvider
          attribute='class'
          defaultTheme='light'
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            <Navbar />
            <main className='min-h-screen pt-20'>{children}</main>
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
