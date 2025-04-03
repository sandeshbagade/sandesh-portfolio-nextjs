import { Metadata } from 'next';
import { projects } from '@/lib/data';
import { FaGithub, FaExternalLinkAlt, FaYoutube, FaCode } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Projects - Sandesh Bagade',
  description:
    "Explore Sandesh Bagade's projects and contributions in web development using React, Next.js, and more.",
};

export default function ProjectsPage() {
  return (
    <div className='container mx-auto px-4 py-16 md:py-24'>
      {/* Page Title */}
      <div className='text-center mb-16'>
        <h1 className='text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6'>
          My Projects
        </h1>
        <div className='w-20 h-1.5 bg-blue-600 mx-auto rounded-full mb-8'></div>
        <p className='text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto'>
          A collection of projects that showcase my skills and experience in
          software development.
        </p>
      </div>

      {/* Projects Grid */}
      <div className='grid gap-10 md:grid-cols-2 xl:grid-cols-2'>
        {projects.map((project, index) => (
          <div
            key={index}
            className='bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col h-full'
          >
            <div className='p-6 flex-grow'>
              <div className='flex justify-between items-center mb-4'>
                <h2 className='text-2xl font-bold text-gray-900 dark:text-white'>
                  {project.title}
                </h2>
                <div className='flex space-x-3'>
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
                <p className='text-gray-600 dark:text-gray-300 mb-6'>
                  Made an open source contribution to the{' '}
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
                  that improved TypeScript definitions. This contribution
                  enhanced the developer experience by improving type safety and
                  documentation.
                </p>
              ) : (
                <p className='text-gray-600 dark:text-gray-300 mb-6'>
                  {project.description}
                </p>
              )}

              <div className='flex flex-wrap gap-2 mb-6'>
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className='px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 rounded-full'
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className='space-y-4'>
                <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
                  Key Features:
                </h3>
                <ul className='list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2'>
                  {project.title === 'EEG Wave Analyser Web App' ? (
                    <>
                      <li>Real-time signal processing and visualization</li>
                      <li>Advanced filtering algorithms for noise reduction</li>
                      <li>User-friendly interface for researchers</li>
                      <li>Secure data storage and export functionality</li>
                    </>
                  ) : project.title === 'Open Source Contribution' ? (
                    <>
                      <li>Improved TypeScript type definitions</li>
                      <li>Enhanced documentation for component usage</li>
                      <li>Fixed edge case bugs in animation components</li>
                      <li>Better developer experience with proper typings</li>
                    </>
                  ) : project.title === 'E-Commerce Mobile App' ? (
                    <>
                      <li>
                        Seamless product browsing and search functionality
                      </li>
                      <li>Secure payment gateway integration</li>
                      <li>User profiles with order history</li>
                      <li>Push notifications for order updates</li>
                    </>
                  ) : (
                    <>
                      <li>Responsive design with clean UI/UX</li>
                      <li>Performance optimized for fast load times</li>
                      <li>Comprehensive testing suite</li>
                      <li>CI/CD pipeline for automated deployments</li>
                    </>
                  )}
                </ul>
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
                  ? 'View Package Repository'
                  : 'View GitHub Repository'}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
