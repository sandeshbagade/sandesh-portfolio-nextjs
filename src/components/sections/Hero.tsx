'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Hero = () => {
  return (
    <section className='py-20 md:py-32 relative overflow-hidden'>
      {/* Background gradient */}
      <div className='absolute inset-0 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950 -z-10' />

      <div className='container mx-auto px-4 md:px-6'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-10'>
          {/* Text Content */}
          <motion.div
            className='w-full md:w-1/2'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4'>
              Hi, I&apos;m <span className='text-blue-600'>Sandesh Bagade</span>
            </h1>
            <h2 className='text-xl md:text-2xl font-medium text-gray-700 dark:text-gray-300 mb-6'>
              Software Engineer specializing in front-end development
            </h2>
            <p className='text-gray-600 dark:text-gray-400 mb-8 text-lg leading-relaxed max-w-lg'>
              I build responsive, user-friendly web applications with modern
              JavaScript frameworks. With experience in data visualization, API
              design, and chatbot implementations.
            </p>

            <div className='flex flex-wrap gap-4'>
              <Link
                href='/contact'
                className='bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center gap-2'
              >
                Get in Touch
                <HiArrowNarrowRight />
              </Link>
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            className='w-full md:w-2/5'
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className='relative w-64 h-64 mx-auto md:w-80 md:h-80 rounded-full bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl'>
              {/* Profile image with fallback to initials */}
              <Image
                src='/user_profile.jpeg'
                alt='Sandesh Bagade'
                fill
                sizes='(max-width: 768px) 256px, 320px'
                className='object-cover'
                priority
                onError={(e) => {
                  // If image fails to load, show initials instead
                  e.currentTarget.style.display = 'none';
                  const parent = e.currentTarget.parentElement;
                  if (parent) {
                    const fallback = document.createElement('div');
                    fallback.className = 'text-blue-600 text-6xl font-bold';
                    fallback.innerText = 'SB';
                    parent.appendChild(fallback);
                  }
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
