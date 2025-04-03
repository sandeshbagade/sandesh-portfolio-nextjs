import Hero from '@/components/sections/Hero';
import Experience from '@/components/sections/Experience';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sandesh Bagade | Software Engineer',
  description:
    'Portfolio website of Sandesh Bagade, a Software Engineer specializing in front-end development with React and Next.js',
};

export default function Home() {
  return (
    <>
      <Hero />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
