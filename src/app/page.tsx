import Hero from '@/components/sections/Hero';
import Experience from '@/components/sections/Experience';
import Skills from '@/components/sections/Skills';
import Hobbies from '@/components/sections/Hobbies';
import Instagram from '@/components/sections/Instagram';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sandesh Bagade | Full Stack Developer & Creative Soul',
  description:
    'Welcome to my personal space! I\'m Sandesh Bagade, a Freelance Full Stack Web Developer working with clients from US, Canada, and Singapore. When I\'m not coding, you\'ll find me playing pickleball, making music with my flute, or capturing moments through photography. Explore my work, hobbies, and journey!',
};

export default function Home() {
  return (
    <>
      <Hero />
      <Experience />
      <Skills />
      <Hobbies />
      <Instagram />
      <Projects />
      <Contact />
    </>
  );
}
