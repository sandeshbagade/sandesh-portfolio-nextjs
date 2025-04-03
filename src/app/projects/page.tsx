import { Metadata } from 'next';
import { projects } from '@/lib/data';
import { FaGithub, FaExternalLinkAlt, FaYoutube } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Projects - Sandesh Bagade',
  description:
    "Explore Sandesh Bagade's projects and contributions in web development using React, Next.js, and more.",
};

export default function ProjectsPage() {
  return (
    <div className='pt-24 pb-16'>
      <div className='container mx-auto px-4 md:px-6'>
        <div className='max-w-4xl mx-auto'>
          <h1 className='text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6'>
            My Projects
          </h1>
          <div className='w-16 h-1.5 bg-blue-600 mb-10'></div>

          <p className='text-lg text-gray-700 dark:text-gray-300 mb-12'>
            Here are some of the projects I&apos;ve worked on. Each project
            represents a unique challenge and learning opportunity.
          </p>

          <div className='space-y-12'>
            {projects.map((project, index) => (
              <div
                key={index}
                className='bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-700'
              >
                <div className='p-6 md:p-8'>
                  <h2 className='text-2xl font-bold text-gray-900 dark:text-white mb-4'>
                    {project.title}
                  </h2>
                  <p className='text-gray-700 dark:text-gray-300 mb-6'>
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className='mb-6'>
                    <h3 className='text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3'>
                      Technologies Used
                    </h3>
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

                  {/* Links */}
                  <div className='flex flex-wrap gap-4'>
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex items-center gap-2 text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-500 transition-colors'
                      >
                        <FaGithub className='w-5 h-5' />
                        <span>GitHub Repository</span>
                      </a>
                    )}
                    {project.links.live && (
                      <a
                        href={project.links.live}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex items-center gap-2 text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-500 transition-colors'
                      >
                        <FaExternalLinkAlt className='w-4 h-4' />
                        <span>Live Site</span>
                      </a>
                    )}
                    {project.links.demo && (
                      <a
                        href={project.links.demo}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex items-center gap-2 text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-500 transition-colors'
                      >
                        <FaYoutube className='w-5 h-5' />
                        <span>Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
