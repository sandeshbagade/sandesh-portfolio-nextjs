'use client';

import { motion } from 'framer-motion';
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaCalendarAlt,
  FaLanguage,
} from 'react-icons/fa';
import { personalInfo } from '@/lib/data';
import { useLanguage } from '@/lib/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();
  return (
    <section className='py-12 md:py-16 lg:py-20'>
      <div className='container mx-auto px-4 md:px-6'>
        <div className='mb-8 md:mb-12 text-center'>
          <motion.h2
            className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 md:mb-4'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {t.sections.contact.title}
          </motion.h2>
          <motion.div
            className='w-20 h-1.5 bg-blue-600 mx-auto rounded-full mb-6'
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
            {t.sections.contact.description}
          </motion.p>
        </div>

        <div className='max-w-4xl mx-auto'>
          {/* Contact Info */}
          <motion.div
            className='bg-white dark:bg-gray-800 p-5 sm:p-6 md:p-8 rounded-xl shadow-md border border-gray-200 dark:border-gray-700'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8'>
              {/* Left Column */}
              <div className='space-y-5 md:space-y-6'>
                <div className='flex items-start'>
                  <div className='flex-shrink-0 bg-blue-100 dark:bg-blue-900/30 p-2.5 sm:p-3 rounded-full text-blue-600'>
                    <FaEnvelope className='w-4 h-4 sm:w-5 sm:h-5' />
                  </div>
                  <div className='ml-3 sm:ml-4'>
                    <h4 className='text-base sm:text-lg font-medium text-gray-900 dark:text-white mb-1'>
                      {t.sections.contact.email}
                    </h4>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className='text-sm sm:text-base text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors break-all'
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <div className='flex items-start'>
                  <div className='flex-shrink-0 bg-blue-100 dark:bg-blue-900/30 p-2.5 sm:p-3 rounded-full text-blue-600'>
                    <FaPhoneAlt className='w-4 h-4 sm:w-5 sm:h-5' />
                  </div>
                  <div className='ml-3 sm:ml-4'>
                    <h4 className='text-base sm:text-lg font-medium text-gray-900 dark:text-white mb-1'>
                      {t.sections.contact.phone}
                    </h4>
                    <a
                      href={`tel:${personalInfo.phone}`}
                      className='text-sm sm:text-base text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors'
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>

                <div className='flex items-start'>
                  <div className='flex-shrink-0 bg-blue-100 dark:bg-blue-900/30 p-2.5 sm:p-3 rounded-full text-blue-600'>
                    <FaMapMarkerAlt className='w-4 h-4 sm:w-5 sm:h-5' />
                  </div>
                  <div className='ml-3 sm:ml-4'>
                    <h4 className='text-base sm:text-lg font-medium text-gray-900 dark:text-white mb-1'>
                      {t.sections.contact.location}
                    </h4>
                    <p className='text-sm sm:text-base text-gray-600 dark:text-gray-400'>
                      {personalInfo.location}
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className='space-y-5 md:space-y-6'>
                <div className='flex items-start'>
                  <div className='flex-shrink-0 bg-blue-100 dark:bg-blue-900/30 p-2.5 sm:p-3 rounded-full text-blue-600'>
                    <FaCalendarAlt className='w-4 h-4 sm:w-5 sm:h-5' />
                  </div>
                  <div className='ml-3 sm:ml-4'>
                    <h4 className='text-base sm:text-lg font-medium text-gray-900 dark:text-white mb-1'>
                      {t.sections.contact.dob}
                    </h4>
                    <p className='text-sm sm:text-base text-gray-600 dark:text-gray-400'>
                      {personalInfo.dateOfBirth}
                    </p>
                  </div>
                </div>

                <div className='flex items-start'>
                  <div className='flex-shrink-0 bg-blue-100 dark:bg-blue-900/30 p-2.5 sm:p-3 rounded-full text-blue-600'>
                    <FaLanguage className='w-4 h-4 sm:w-5 sm:h-5' />
                  </div>
                  <div className='ml-3 sm:ml-4'>
                    <h4 className='text-base sm:text-lg font-medium text-gray-900 dark:text-white mb-1'>
                      {t.sections.contact.languages}
                    </h4>
                    <p className='text-sm sm:text-base text-gray-600 dark:text-gray-400'>
                      {personalInfo.languages.join(', ')}
                    </p>
                  </div>
                </div>

                <div className='flex items-start'>
                  <div className='flex-shrink-0 bg-blue-100 dark:bg-blue-900/30 p-2.5 sm:p-3 rounded-full text-blue-600'>
                    <FaInstagram className='w-4 h-4 sm:w-5 sm:h-5' />
                  </div>
                  <div className='ml-3 sm:ml-4'>
                    <h4 className='text-base sm:text-lg font-medium text-gray-900 dark:text-white mb-2'>
                      {t.sections.contact.social}
                    </h4>
                    <div className='flex space-x-3 sm:space-x-4'>
                      <a
                        href={personalInfo.links.instagram}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-gray-600 hover:text-pink-600 dark:text-gray-400 dark:hover:text-pink-500 transition-colors'
                        aria-label='Instagram'
                      >
                        <FaInstagram className='h-5 w-5' />
                      </a>
                      <a
                        href={personalInfo.links.github}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500 transition-colors'
                        aria-label='Github'
                      >
                        <FaGithub className='h-5 w-5' />
                      </a>
                      <a
                        href={personalInfo.links.linkedin}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500 transition-colors'
                        aria-label='LinkedIn'
                      >
                        <FaLinkedin className='h-5 w-5' />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
