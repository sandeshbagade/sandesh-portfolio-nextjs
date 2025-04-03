import { Metadata } from 'next';
import Contact from '@/components/sections/Contact';

export const metadata: Metadata = {
  title: 'Contact - Sandesh Bagade',
  description:
    'Get in touch with Sandesh Bagade through email, phone, or social media.',
};

export default function ContactPage() {
  return (
    <div className='pt-24 pb-16'>
      <div className='container mx-auto px-4 md:px-6'>
        <div className='max-w-4xl mx-auto mb-16'>
          <h1 className='text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6'>
            Contact Me
          </h1>
          <div className='w-16 h-1.5 bg-blue-600 mb-10'></div>

          <p className='text-lg text-gray-700 dark:text-gray-300'>
            I&apos;m always open to discussing new projects, opportunities, or
            partnerships. If you&apos;d like to get in touch, please reach out
            through any of the contact methods below.
          </p>
        </div>

        <Contact />
      </div>
    </div>
  );
}
