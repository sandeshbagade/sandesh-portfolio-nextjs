import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { personalInfo } from '@/lib/data';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-gray-50 dark:bg-gray-900 py-12 border-t border-gray-200 dark:border-gray-800'>
      <div className='container mx-auto px-4 md:px-6'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
          {/* Name and brief description */}
          <div>
            <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-4'>
              <span className='text-blue-600'>S</span>andesh Bagade
            </h3>
            <p className='text-gray-600 dark:text-gray-400 mb-4 max-w-md'>
              Software Engineer specializing in front-end development and
              building modern web applications with React and Next.js.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-4'>
              Quick Links
            </h3>
            <ul className='space-y-2'>
              <li>
                <Link
                  href='/'
                  className='text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors'
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href='/about'
                  className='text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors'
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href='/projects'
                  className='text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors'
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href='/contact'
                  className='text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors'
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-4'>
              Contact
            </h3>
            <div className='space-y-3'>
              <p className='text-gray-600 dark:text-gray-400 flex items-center'>
                <FaEnvelope className='mr-2 text-blue-600' />
                <a
                  href={`mailto:${personalInfo.email}`}
                  className='hover:text-blue-600 dark:hover:text-blue-500 transition-colors'
                >
                  {personalInfo.email}
                </a>
              </p>
              <p className='text-gray-600 dark:text-gray-400'>
                {personalInfo.location}
              </p>

              {/* Social Links */}
              <div className='flex space-x-4 mt-4'>
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

        {/* Copyright */}
        <div className='mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 text-center'>
          <p className='text-gray-600 dark:text-gray-400 text-sm'>
            © {currentYear} Sandesh Bagade. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
