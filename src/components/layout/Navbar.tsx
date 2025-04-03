'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HiMenu, HiX } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { personalInfo } from '@/lib/data';
import { ThemeToggle } from './ThemeToggle';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/projects', label: 'Projects' },
  { path: '/contact', label: 'Contact' },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md py-4 shadow-md'
          : 'bg-transparent py-6'
      }`}
    >
      <div className='container mx-auto px-4 md:px-6 flex justify-between items-center'>
        {/* Logo */}
        <Link
          href='/'
          className='text-2xl font-bold text-gray-900 dark:text-white'
        >
          <span className='text-blue-600'>S</span>andesh
        </Link>

        {/* Desktop Navigation */}
        <nav className='hidden md:flex space-x-8 items-center'>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`text-sm transition-colors hover:text-blue-600 ${
                pathname === link.path
                  ? 'font-medium text-blue-600'
                  : 'text-gray-600 dark:text-gray-300'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Social Links - Desktop */}
        <div className='hidden md:flex items-center space-x-4'>
          <a
            href={personalInfo.links.github}
            target='_blank'
            rel='noopener noreferrer'
            className='text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-500 transition-colors'
            aria-label='Github'
          >
            <FaGithub className='h-5 w-5' />
          </a>
          <a
            href={personalInfo.links.linkedin}
            target='_blank'
            rel='noopener noreferrer'
            className='text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-500 transition-colors'
            aria-label='LinkedIn'
          >
            <FaLinkedin className='h-5 w-5' />
          </a>
          <a
            href={personalInfo.links.twitter}
            target='_blank'
            rel='noopener noreferrer'
            className='text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-500 transition-colors'
            aria-label='Twitter'
          >
            <FaTwitter className='h-5 w-5' />
          </a>
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <button
          className='md:hidden text-gray-700 dark:text-gray-200 focus:outline-none'
          onClick={toggleMobileMenu}
          aria-label='Menu'
        >
          {mobileMenuOpen ? (
            <HiX className='h-6 w-6' />
          ) : (
            <HiMenu className='h-6 w-6' />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className='md:hidden bg-white dark:bg-gray-900 shadow-lg'
          >
            <div className='container mx-auto px-4 py-4 flex flex-col'>
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`py-3 text-base transition-colors ${
                    pathname === link.path
                      ? 'font-medium text-blue-600'
                      : 'text-gray-600 dark:text-gray-300'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              {/* Social Links - Mobile */}
              <div className='flex space-x-6 mt-4 pt-4 border-t border-gray-200 dark:border-gray-700'>
                <a
                  href={personalInfo.links.github}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-500 transition-colors'
                  aria-label='Github'
                >
                  <FaGithub className='h-5 w-5' />
                </a>
                <a
                  href={personalInfo.links.linkedin}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-500 transition-colors'
                  aria-label='LinkedIn'
                >
                  <FaLinkedin className='h-5 w-5' />
                </a>
                <a
                  href={personalInfo.links.twitter}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-500 transition-colors'
                  aria-label='Twitter'
                >
                  <FaTwitter className='h-5 w-5' />
                </a>
                <ThemeToggle />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
