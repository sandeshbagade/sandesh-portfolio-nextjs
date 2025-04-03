import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { ThemeProvider } from '@/components/layout/ThemeProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Sandesh Bagade | Software Engineer',
  description:
    'Portfolio website of Sandesh Bagade, a Software Engineer specializing in front-end development with React and Next.js',
  keywords: [
    'Sandesh Bagade',
    'Software Engineer',
    'React Developer',
    'Next.js Developer',
    'Frontend Engineer',
    'Portfolio',
    'Resume',
  ],
  authors: [{ name: 'Sandesh Bagade' }],
  creator: 'Sandesh Bagade',
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
