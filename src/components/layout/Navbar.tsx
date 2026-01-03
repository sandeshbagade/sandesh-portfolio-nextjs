'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { HiMenu, HiX, HiDownload } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { personalInfo } from '@/lib/data';
import { ThemeToggle } from './ThemeToggle';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useLanguage } from '@/lib/LanguageContext';

const navLinks = [
  { path: '#home', label: 'Home' },
  { path: '#about', label: 'About' },
  { path: '#education', label: 'Education' },
  { path: '#experience', label: 'Work Experience' },
  { path: '#contact', label: 'Contact' },
];

const Navbar = () => {
  const { t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Update active section based on scroll position
      const sections = ['home', 'about', 'education', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(`#${section}`);
            break;
          }
        }
      }
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

  // Handle navigation click
  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  // Handle biodata download
  const handleBiodataDownload = () => {
    if (typeof window !== 'undefined') {
      // Add a small delay to ensure the component has mounted
      setTimeout(() => {
        if ((window as any).generateBiodataPDF) {
          (window as any).generateBiodataPDF();
        } else {
          console.error('Biodata PDF generator not available');
          alert('PDF generator is loading. Please wait a moment and try again.');
        }
      }, 100);
    }
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
            <a
              key={link.path}
              href={link.path}
              className={`text-sm transition-colors hover:text-blue-600 cursor-pointer ${
                activeSection === link.path
                  ? 'font-medium text-blue-600'
                  : 'text-gray-600 dark:text-gray-300'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Social Links - Desktop */}
        <div className='hidden md:flex items-center space-x-4'>
          <button
            onClick={handleBiodataDownload}
            className='flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors'
            aria-label='Download Biodata'
          >
            <HiDownload className='h-4 w-4' />
            {t.biodata.downloadButton}
          </button>
          <a
            href={personalInfo.links.instagram}
            target='_blank'
            rel='noopener noreferrer'
            className='text-gray-600 hover:text-pink-600 dark:text-gray-300 dark:hover:text-pink-500 transition-colors'
            aria-label='Instagram'
          >
            <FaInstagram className='h-5 w-5' />
          </a>
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
          <LanguageSwitcher />
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
                <a
                  key={link.path}
                  href={link.path}
                  onClick={handleNavClick}
                  className={`py-3 text-base transition-colors cursor-pointer ${
                    activeSection === link.path
                      ? 'font-medium text-blue-600'
                      : 'text-gray-600 dark:text-gray-300'
                  }`}
                >
                  {link.label}
                </a>
              ))}

              {/* Biodata Download - Mobile */}
              <button
                onClick={handleBiodataDownload}
                className='flex items-center justify-center gap-2 w-full px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors mt-4'
                aria-label='Download Biodata'
              >
                <HiDownload className='h-4 w-4' />
                {t.biodata.downloadButton}
              </button>

              {/* Social Links & Settings - Mobile */}
              <div className='flex flex-wrap items-center gap-4 mt-4 pt-4 border-t border-gray-200 dark:border-gray-700'>
                <a
                  href={personalInfo.links.instagram}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-gray-600 hover:text-pink-600 dark:text-gray-300 dark:hover:text-pink-500 transition-colors'
                  aria-label='Instagram'
                >
                  <FaInstagram className='h-5 w-5' />
                </a>
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
                <LanguageSwitcher />
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
