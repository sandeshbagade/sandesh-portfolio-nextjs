'use client';

import { motion } from 'framer-motion';
import { experience } from '@/lib/data';
import {
  HiBriefcase,
  HiCalendar,
  HiLocationMarker,
  HiLink,
} from 'react-icons/hi';

const Experience = () => {
  return (
    <section className='py-20 bg-gray-50 dark:bg-gray-900/50'>
      <div className='container mx-auto px-4 md:px-6'>
        <div className='mb-12 text-center'>
          <motion.h2
            className='text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Work Experience
          </motion.h2>
          <motion.div
            className='w-20 h-1.5 bg-blue-600 mx-auto rounded-full mb-6'
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 80 }}
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
            My professional journey as a software engineer across different
            companies.
          </motion.p>
        </div>

        <div className='space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gray-200 dark:before:bg-gray-800'>
          {experience.map((job, index) => (
            <motion.div
              key={index}
              className='relative flex items-start md:flex-row-reverse group'
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Timeline circle */}
              <div className='flex items-center justify-center w-10 h-10 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-blue-600 shadow-md ml-0.5 md:ml-0 md:mr-0.5 z-10'>
                <HiBriefcase className='w-5 h-5' />
              </div>

              {/* Content Card */}
              <div className='bg-white dark:bg-gray-800 p-5 md:p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 ml-4 md:ml-0 md:mr-4 w-full md:w-[calc(50%-2.5rem)]'>
                <div className='flex flex-col md:flex-row justify-between mb-2'>
                  <h3 className='text-xl font-bold text-gray-900 dark:text-white'>
                    {job.title} @{' '}
                    <a
                      href={job.companyUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 hover:underline cursor-pointer'
                      aria-label={`${job.company} website`}
                    >
                      {job.company}
                    </a>
                  </h3>
                </div>

                <div className='flex flex-wrap gap-x-4 gap-y-1 mb-4 text-sm text-gray-500 dark:text-gray-400'>
                  <div className='flex items-center'>
                    <HiCalendar className='mr-1 text-blue-600' />
                    {job.period}
                  </div>
                  <div className='flex items-center'>
                    <HiLocationMarker className='mr-1 text-blue-600' />
                    {job.location}
                  </div>
                </div>

                <ul className='list-disc list-inside space-y-2 mb-4 text-gray-600 dark:text-gray-300'>
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

                <div className='flex flex-wrap gap-2 mt-4'>
                  {job.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className='px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 rounded-full'
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
