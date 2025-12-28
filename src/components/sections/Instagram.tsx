'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { HiExternalLink } from 'react-icons/hi';
import { personalInfo } from '@/lib/data';
import { useLanguage } from '@/lib/LanguageContext';

const Instagram = () => {
  const { t } = useLanguage();
  // Instagram grid placeholder - in a real implementation, you would fetch from Instagram API
  // or use a service like Instagram Basic Display API
  const instagramPosts = [
    { id: 1, placeholder: true },
    { id: 2, placeholder: true },
    { id: 3, placeholder: true },
    { id: 4, placeholder: true },
    { id: 5, placeholder: true },
    { id: 6, placeholder: true },
  ];

  return (
    <section className='py-12 md:py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950'>
      <div className='container mx-auto px-4 md:px-6'>
        <div className='mb-8 md:mb-12 text-center'>
          <motion.h2
            className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 md:mb-4'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {t.sections.instagram.title}
          </motion.h2>
          <motion.div
            className='w-20 h-1.5 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 mx-auto rounded-full mb-6'
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
          <motion.p
            className='text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-base sm:text-lg'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {t.sections.instagram.description}
          </motion.p>
        </div>

        {/* Instagram CTA Card */}
        <motion.div
          className='max-w-4xl mx-auto mb-8 md:mb-12'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className='relative overflow-hidden rounded-xl md:rounded-2xl bg-gradient-to-br from-purple-600 via-pink-600 to-orange-600 p-6 sm:p-8 md:p-12 shadow-2xl'>
            {/* Decorative elements */}
            <div className='absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2' />
            <div className='absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2' />

            <div className='relative z-10 flex flex-col items-center text-center gap-6'>
              <div>
                <div className='flex items-center justify-center gap-3 mb-4'>
                  <div className='w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-2xl sm:text-3xl'>
                    📸
                  </div>
                  <div>
                    <h3 className='text-xl sm:text-2xl md:text-3xl font-bold text-white'>
                      @sandesh_bagade
                    </h3>
                    <p className='text-white/80 text-xs sm:text-sm'>Follow me on Instagram</p>
                  </div>
                </div>
                <p className='text-white/90 text-sm sm:text-base md:text-lg max-w-md mx-auto'>
                  {t.sections.instagram.cta}
                </p>
              </div>

              <Link
                href={personalInfo.links.instagram || 'https://www.instagram.com/sandesh_bagade'}
                target='_blank'
                rel='noopener noreferrer'
                className='group bg-white hover:bg-gray-100 text-gray-900 font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105 w-full sm:w-auto'
              >
                {t.sections.instagram.button}
                <HiExternalLink className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Instagram Grid Preview */}
        <div className='max-w-5xl mx-auto'>
          <div className='grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4'>
            {instagramPosts.map((post, index) => (
              <motion.a
                key={post.id}
                href={personalInfo.links.instagram || 'https://www.instagram.com/sandesh_bagade'}
                target='_blank'
                rel='noopener noreferrer'
                className='group relative aspect-square overflow-hidden rounded-lg bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 cursor-pointer'
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                {/* Placeholder gradient */}
                <div className='absolute inset-0 bg-gradient-to-br from-purple-400/20 via-pink-400/20 to-orange-400/20' />

                {/* Hover overlay */}
                <div className='absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center'>
                  <div className='text-white text-center'>
                    <HiExternalLink className='w-8 h-8 mx-auto mb-2' />
                    <p className='text-sm font-medium'>View on Instagram</p>
                  </div>
                </div>

                {/* Instagram icon */}
                <div className='absolute inset-0 flex items-center justify-center'>
                  <div className='text-6xl opacity-20 group-hover:opacity-30 transition-opacity'>
                    📸
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Note about Instagram integration */}
          <motion.p
            className='text-center text-sm text-gray-500 dark:text-gray-500 mt-8'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            {t.sections.instagram.note}
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Instagram;

