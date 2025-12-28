'use client';

import { motion } from 'framer-motion';
import { HiAcademicCap, HiCalendar } from 'react-icons/hi';
import { LiaUniversitySolid } from 'react-icons/lia';
import { education } from '@/lib/data';
import { useLanguage } from '@/lib/LanguageContext';

const Education = () => {
  const { t } = useLanguage();
  return (
    <section className='py-12 md:py-16 lg:py-20 bg-white dark:bg-gray-950'>
      <div className='container mx-auto px-4 md:px-6'>
        <div className='mb-12 text-center'>
          <motion.h2
            className='text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {t.sections.education.title}
          </motion.h2>
          <motion.div
            className='w-24 h-1.5 bg-blue-600 mx-auto rounded-full mb-6'
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
          <motion.p
            className='text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {t.sections.education.description}
          </motion.p>
        </div>

        <div className='max-w-4xl mx-auto'>
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className='bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 md:p-8 mb-6'
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className='flex items-start gap-4'>
                <div className='flex-shrink-0 w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center'>
                  <HiAcademicCap className='w-8 h-8 text-blue-600' />
                </div>
                <div className='flex-grow'>
                  <h3 className='text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3'>
                    {edu.degree}
                  </h3>

                  <div className='flex flex-wrap items-center gap-4 mb-4 text-gray-600 dark:text-gray-400'>
                    <div className='flex items-center gap-2'>
                      <LiaUniversitySolid className='text-blue-600 w-5 h-5' />
                      <span className='font-medium'>{edu.institution}</span>
                    </div>
                    <div className='flex items-center gap-2'>
                      <HiCalendar className='text-blue-600 w-4 h-4' />
                      <span>{edu.period}</span>
                    </div>
                  </div>

                  <p className='text-gray-700 dark:text-gray-300'>
                    {edu.details}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

