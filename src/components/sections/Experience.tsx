'use client';

import { motion } from 'framer-motion';
import { experience } from '@/lib/data';
import {
  HiBriefcase,
  HiCalendar,
  HiLocationMarker,
  HiLink,
} from 'react-icons/hi';
import { useLanguage } from '@/lib/LanguageContext';

const Experience = () => {
  const { t } = useLanguage();
  return (
    <section className='py-12 md:py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900/50 dark:to-gray-950'>
      <div className='container mx-auto px-4 md:px-6'>
        <div className='mb-12 text-center'>
          <motion.h2
            className='text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {t.sections.experience.title}
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
            {t.sections.experience.description}
          </motion.p>
        </div>

        <div className='max-w-4xl mx-auto space-y-6'>
          {experience.map((job, index) => (
            <motion.div
              key={index}
              className='bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 md:p-8 hover:shadow-xl transition-all duration-300'
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className='flex items-start gap-4 mb-6'>
                <div className='flex-shrink-0 w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center'>
                  <HiBriefcase className='w-7 h-7 text-blue-600' />
                </div>
                <div className='flex-grow'>
                  <h3 className='text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2'>
                    {job.title}
                  </h3>
                  <p className='text-lg font-semibold text-blue-600 dark:text-blue-400 mb-3'>
                    {job.company}
                  </p>
                  <div className='flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400'>
                    <div className='flex items-center gap-1'>
                      <HiCalendar className='text-blue-600' />
                      {job.period}
                    </div>
                    <div className='flex items-center gap-1'>
                      <HiLocationMarker className='text-blue-600' />
                      {job.location}
                    </div>
                  </div>
                </div>
              </div>

              <ul className='list-disc list-inside space-y-2 mb-6 text-gray-600 dark:text-gray-300'>
                  {job.description.map((item, itemIndex) => {
                    // For OPA Marketing job, add specific links for mobile, marketing, and client apps
                    if (job.company === 'OPA Marketing' && job.appLinks) {
                      if (item.includes('mobile app')) {
                        return (
                          <li key={itemIndex} className='pl-2'>
                            Built{' '}
                            <a
                              href={job.appLinks.mobile}
                              target='_blank'
                              rel='noopener noreferrer'
                              className='text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 hover:underline cursor-pointer'
                              aria-label='OPA Marketing mobile app'
                            >
                              mobile app
                            </a>{' '}
                            with 4.5-star rating and 500k+ downloads.
                          </li>
                        );
                      } else if (item.includes('marketing app')) {
                        return (
                          <li key={itemIndex} className='pl-2'>
                            Created{' '}
                            <a
                              href={job.appLinks.marketing}
                              target='_blank'
                              rel='noopener noreferrer'
                              className='text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 hover:underline cursor-pointer'
                              aria-label='OPA Marketing branding app'
                            >
                              marketing app
                            </a>{' '}
                            for branding and lead generation.
                          </li>
                        );
                      } else if (item.includes('client app')) {
                        return (
                          <li key={itemIndex} className='pl-2'>
                            Built{' '}
                            <a
                              href={job.appLinks.client}
                              target='_blank'
                              rel='noopener noreferrer'
                              className='text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 hover:underline cursor-pointer'
                              aria-label='OPA client app for performance tracking'
                            >
                              client app
                            </a>{' '}
                            for performance tracking.
                          </li>
                        );
                      }
                    }
                    return (
                      <li key={itemIndex} className='pl-2'>
                        {item}
                      </li>
                    );
                  })}
                </ul>

              <div className='flex flex-wrap gap-2'>
                {job.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className='px-3 py-1.5 text-xs font-medium bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 rounded-full'
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
