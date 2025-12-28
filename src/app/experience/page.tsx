import { Metadata } from 'next';
import Experience from '@/components/sections/Experience';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';

export const metadata: Metadata = {
  title: 'Work Experience - Sandesh Bagade',
  description:
    'Professional work experience of Sandesh Bagade as a Full Stack Web Developer, including freelance work and positions at various companies.',
};

export default function ExperiencePage() {
  return (
    <div className='pt-20'>
      <Experience />
      <Skills />
      <Projects />
    </div>
  );
}

