import Hero from '@/components/sections/Hero';
import AboutDetails from '@/components/sections/AboutDetails';
import Instagram from '@/components/sections/Instagram';
import Education from '@/components/sections/Education';
import Experience from '@/components/sections/Experience';
import Skills from '@/components/sections/Skills';
import Contact from '@/components/sections/Contact';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sandesh Bagade | Web Developer, Stock Investor & Mindfulness Practitioner',
  description:
    'Sandesh Bagade - Full Stack Web Developer and Stock Market Investor from Pune. Passionate about technology, markets, mindful living, health & fitness, and various interests.',
};

export default function Home() {
  return (
    <>
      <div id='home'>
        <Hero />
      </div>
      <div id='about' className='scroll-mt-20'>
        <AboutDetails />
        <Instagram />
      </div>
      <div id='education' className='scroll-mt-20'>
        <Education />
      </div>
      <div id='experience' className='scroll-mt-20'>
        <Experience />
        <Skills />
      </div>
      <div id='contact' className='scroll-mt-20'>
        <Contact />
      </div>
    </>
  );
}
