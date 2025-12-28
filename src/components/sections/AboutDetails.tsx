'use client';

import { motion } from 'framer-motion';
import { HiCalendar, HiLocationMarker } from 'react-icons/hi';
import { personalInfo, professionalInterests, hobbies } from '@/lib/data';
import { useLanguage } from '@/lib/LanguageContext';

const AboutDetails = () => {
  const { language, t } = useLanguage();
  return (
    <section className='py-12 md:py-16 lg:py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900'>
      <div className='container mx-auto px-4 md:px-6'>
        {/* Section Header */}
        <div className='mb-12 md:mb-16 text-center'>
          <motion.h2
            className='text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {t.sections.about.title}
          </motion.h2>
          <motion.div
            className='w-24 h-1.5 bg-blue-600 mx-auto rounded-full'
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
        </div>

        {/* Personal Info Bar */}
        <motion.div
          className='max-w-4xl mx-auto mb-12'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className='bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 md:p-8'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
              <div className='flex items-center gap-3'>
                <div className='flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center'>
                  <HiLocationMarker className='w-6 h-6 text-blue-600' />
                </div>
                <div>
                  <p className='text-sm text-gray-500 dark:text-gray-400'>{t.sections.about.location}</p>
                  <p className='text-gray-900 dark:text-white font-semibold'>{personalInfo.location}</p>
                </div>
              </div>
              <div className='flex items-center gap-3'>
                <div className='flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center'>
                  <HiCalendar className='w-6 h-6 text-blue-600' />
                </div>
                <div>
                  <p className='text-sm text-gray-500 dark:text-gray-400'>{t.sections.about.dob}</p>
                  <p className='text-gray-900 dark:text-white font-semibold'>{personalInfo.dateOfBirth}</p>
                </div>
              </div>
              <div className='flex items-center gap-3'>
                <div className='flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center'>
                  <span className='text-2xl'>🗣️</span>
                </div>
                <div>
                  <p className='text-sm text-gray-500 dark:text-gray-400'>{t.sections.about.languages}</p>
                  <p className='text-gray-900 dark:text-white font-semibold'>
                    {personalInfo.languages.join(', ')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Professional Background */}
        <motion.div
          className='max-w-4xl mx-auto mb-16'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
            <h3 className='text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center'>
              {t.sections.about.professionalBackground}
            </h3>
          <div className='bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 md:p-8'>
            <div className='space-y-4 text-base text-gray-600 dark:text-gray-300 leading-relaxed'>
              <p>{t.sections.about.backgroundText1}</p>
              <p>{t.sections.about.backgroundText2}</p>
            </div>
          </div>
        </motion.div>

        {/* Professional Interests */}
        <motion.div
          className='max-w-6xl mx-auto mb-16'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h3 className='text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center'>
            {t.sections.about.professionalInterestsTitle}
          </h3>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {professionalInterests.map((interest, index) => (
              <motion.div
                key={index}
                className='group relative overflow-hidden bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-xl transition-all duration-300'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${interest.color} opacity-10 rounded-full -translate-y-1/2 translate-x-1/2`} />
                <div className='relative'>
                  <div className='text-5xl mb-4'>{interest.icon}</div>
                  <h4 className='text-xl font-bold text-gray-900 dark:text-white mb-3'>
                    {interest.title[language]}
                  </h4>
                  <p className='text-sm text-gray-600 dark:text-gray-400 leading-relaxed'>
                    {interest.description[language]}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Personal Interests & Hobbies */}
        <motion.div
          className='max-w-6xl mx-auto'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className='text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center'>
            {t.sections.about.hobbiesTitle}
          </h3>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {hobbies.map((hobby, index) => (
              <motion.div
                key={index}
                className='group relative overflow-hidden bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-xl transition-all duration-300'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${hobby.color} opacity-10 rounded-full -translate-y-1/2 translate-x-1/2`} />
                <div className='relative'>
                  <div className='text-5xl mb-4'>{hobby.icon}</div>
                  <h4 className='text-xl font-bold text-gray-900 dark:text-white mb-3'>
                    {hobby.title[language]}
                  </h4>
                  <p className='text-sm text-gray-600 dark:text-gray-400 leading-relaxed'>
                    {hobby.description[language]}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutDetails;
