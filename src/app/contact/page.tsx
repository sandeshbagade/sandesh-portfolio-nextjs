import { Metadata } from 'next';
import Contact from '@/components/sections/Contact';

export const metadata: Metadata = {
  title: 'Contact - Sandesh Bagade',
  description:
    'Get in touch with Sandesh Bagade for freelance web development projects. Available for clients worldwide - US, Canada, Singapore, and beyond.',
};

export default function ContactPage() {
  return (
    <div className='pt-20 md:pt-24 pb-12 md:pb-16'>
      <div className='container mx-auto px-4 md:px-6'>
        <div className='max-w-4xl mx-auto mb-10 md:mb-16'>
          <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6'>
            Contact Me
          </h1>
          <div className='w-12 md:w-16 h-1.5 bg-blue-600 mb-6 md:mb-10'></div>

          <p className='text-base sm:text-lg text-gray-700 dark:text-gray-300'>
            I&apos;m always open to discussing new projects, freelance opportunities, or collaborations. 
            Whether you&apos;re looking to build a new web application, need help with an existing project, 
            or just want to connect, I&apos;d love to hear from you! I work with clients from around the 
            globe and am available for remote projects.
          </p>
        </div>

        <Contact />
      </div>
    </div>
  );
}
