'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { projects } from '@/lib/data';
import { FaGithub, FaExternalLinkAlt, FaYoutube, FaCode } from 'react-icons/fa';

const Projects = () => {
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
            Projects
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
            Some of my notable projects and contributions.
          </motion.p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className='bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-700'
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Project Content */}
              <div className='p-6'>
                <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-3'>
                  {project.title}
                </h3>

                {/* Enhanced project description with links */}
                {project.title === 'Open Source Contribution' ? (
                  <p className='text-gray-600 dark:text-gray-300 mb-4'>
                    Merged a{' '}
                    <a
                      href={project.links.prLink}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 hover:underline'
                    >
                      Pull Request
                    </a>{' '}
                    to improve TypeScript definitions for{' '}
                    <a
                      href={project.links.github}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 hover:underline'
                    >
                      React Sketch
                    </a>{' '}
                    npm package.
                  </p>
                ) : (
                  <p className='text-gray-600 dark:text-gray-300 mb-4'>
                    {project.description}
                  </p>
                )}

                {/* Tech Stack */}
                <div className='flex flex-wrap gap-2 mb-4'>
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className='px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 rounded-full'
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className='flex space-x-4 mt-6'>
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-500 flex items-center'
                      aria-label='GitHub Repository'
                    >
                      <FaGithub className='mr-2' />
                      <span>
                        {project.title === 'Open Source Contribution'
                          ? 'Package'
                          : 'Code'}
                      </span>
                    </a>
                  )}
                  {project.links.prLink && (
                    <a
                      href={project.links.prLink}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-500 flex items-center'
                      aria-label='Pull Request'
                    >
                      <FaCode className='mr-2' />
                      <span>PR</span>
                    </a>
                  )}
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-500 flex items-center'
                      aria-label='Live Site'
                    >
                      <FaExternalLinkAlt className='mr-2' />
                      <span>Live</span>
                    </a>
                  )}
                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-500 flex items-center'
                      aria-label='Demo'
                    >
                      <FaYoutube className='mr-2' />
                      <span>Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className='text-center mt-10'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link
            href='/projects'
            className='inline-flex items-center text-blue-600 hover:text-blue-700 font-medium'
          >
            View All Projects
            <svg
              className='ml-2 w-4 h-4'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M13 7l5 5m0 0l-5 5m5-5H6'
              />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
