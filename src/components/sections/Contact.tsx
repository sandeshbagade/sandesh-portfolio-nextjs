'use client';

import { motion } from 'framer-motion';
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa';
import { personalInfo } from '@/lib/data';

const Contact = () => {
  return (
    <section className='py-20'>
      <div className='container mx-auto px-4 md:px-6'>
        <div className='mb-12 text-center'>
          <motion.h2
            className='text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Get In Touch
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
            Feel free to reach out for collaboration, opportunities, or just to
            say hello! Connect with me through any of these channels.
          </motion.p>
        </div>

        <div className='max-w-3xl mx-auto'>
          {/* Contact Info */}
          <motion.div
            className='bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md border border-gray-200 dark:border-gray-700'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
              <div className='space-y-6'>
                <div className='flex items-start'>
                  <div className='flex-shrink-0 bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full text-blue-600'>
                    <FaEnvelope className='w-5 h-5' />
                  </div>
                  <div className='ml-4'>
                    <h4 className='text-lg font-medium text-gray-900 dark:text-white'>
                      Email
                    </h4>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className='text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors'
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <div className='flex items-start'>
                  <div className='flex-shrink-0 bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full text-blue-600'>
                    <FaPhoneAlt className='w-5 h-5' />
                  </div>
                  <div className='ml-4'>
                    <h4 className='text-lg font-medium text-gray-900 dark:text-white'>
                      Phone
                    </h4>
                    <a
                      href={`tel:${personalInfo.phone}`}
                      className='text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors'
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>
              </div>

              <div className='space-y-6'>
                <div className='flex items-start'>
                  <div className='flex-shrink-0 bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full text-blue-600'>
                    <FaMapMarkerAlt className='w-5 h-5' />
                  </div>
                  <div className='ml-4'>
                    <h4 className='text-lg font-medium text-gray-900 dark:text-white'>
                      Location
                    </h4>
                    <p className='text-gray-600 dark:text-gray-400'>
                      {personalInfo.location}
                    </p>
                  </div>
                </div>

                <div className='flex items-start'>
                  <div className='flex-shrink-0 bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full text-blue-600'>
                    <FaGithub className='w-5 h-5' />
                  </div>
                  <div className='ml-4'>
                    <h4 className='text-lg font-medium text-gray-900 dark:text-white'>
                      Social
                    </h4>
                    <div className='flex space-x-4 mt-2'>
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
                      <a
                        href={personalInfo.links.twitter}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500 transition-colors'
                        aria-label='Twitter'
                      >
                        <FaTwitter className='h-5 w-5' />
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
