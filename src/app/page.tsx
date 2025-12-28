import Hero from '@/components/sections/Hero';
import ProfessionalInterests from '@/components/sections/ProfessionalInterests';
import Hobbies from '@/components/sections/Hobbies';
import Instagram from '@/components/sections/Instagram';
import Experience from '@/components/sections/Experience';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
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
      <section id='home'>
        <Hero />
      </section>
      <section id='about' className='scroll-mt-20'>
        <ProfessionalInterests />
        <Hobbies />
        <Instagram />
      </section>
      <section id='experience' className='scroll-mt-20'>
        <Experience />
        <Skills />
        <Projects />
      </section>
      <section id='contact' className='scroll-mt-20'>
        <Contact />
      </section>
    </>
  );
}
