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
            Explore some of my recent projects that showcase my technical
            skills.
          </motion.p>
        </div>

        <div className='grid gap-8 md:grid-cols-2'>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className='bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md border border-gray-200 dark:border-gray-700 flex flex-col h-full'
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className='p-6 flex-grow'>
                <div className='flex justify-between items-center mb-4'>
                  <h3 className='text-xl font-bold text-gray-900 dark:text-white'>
                    {project.title}
                  </h3>
                  <div className='flex space-x-2'>
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors cursor-pointer'
                        aria-label={`GitHub repository for ${project.title}`}
                      >
                        <FaGithub className='w-5 h-5' />
                      </a>
                    )}
                    {project.links.demo && (
                      <a
                        href={project.links.demo}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors cursor-pointer'
                        aria-label={`Live demo for ${project.title}`}
                      >
                        <FaExternalLinkAlt className='w-5 h-5' />
                      </a>
                    )}
                  </div>
                </div>

                {project.title === 'Open Source Contribution' ? (
                  <p className='text-gray-600 dark:text-gray-300 mb-4'>
                    Made an open source contribution to{' '}
                    <a
                      href={project.links.github}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 hover:underline cursor-pointer'
                      aria-label='React Sketch GitHub repository'
                    >
                      React Sketch
                    </a>{' '}
                    library with a{' '}
                    <a
                      href={project.links.prLink}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 hover:underline cursor-pointer'
                      aria-label='Pull Request for React Sketch'
                    >
                      Pull Request
                    </a>{' '}
                    that improved TypeScript definitions and fixed bugs.
                  </p>
                ) : (
                  <p className='text-gray-600 dark:text-gray-300 mb-4'>
                    {project.description}
                  </p>
                )}

                <div className='flex flex-wrap gap-2'>
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className='px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 rounded-full'
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className='px-6 py-4 bg-gray-50 dark:bg-gray-700/40 border-t border-gray-200 dark:border-gray-700'>
                <a
                  href={project.links.github}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium cursor-pointer'
                  aria-label={`View ${project.title} code on GitHub`}
                >
                  <FaCode className='mr-2' />
                  {project.title === 'Open Source Contribution'
                    ? 'View Package'
                    : 'View Code'}
                </a>
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
