'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import {
  HiOutlineSun,
  HiOutlineMoon,
  HiOutlineMenu,
  HiOutlineX,
} from 'react-icons/hi';
import { AnimatePresence, motion } from 'framer-motion';

const Header = () => {
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const pathname = usePathname();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ];

  if (!mounted) return null;

  return (
    <header className='fixed w-full bg-white dark:bg-gray-900 shadow-sm z-50'>
      <div className='container mx-auto px-4 md:px-6'>
        <div className='flex justify-between items-center py-4'>
          {/* Logo */}
          <Link
            href='/'
            className='text-xl font-bold text-gray-900 dark:text-white cursor-pointer'
            aria-label='Navigate to home page'
          >
            Sandesh<span className='text-blue-600'>.</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className='hidden md:flex items-center space-x-8'>
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors cursor-pointer ${
                  pathname === item.href
                    ? 'text-blue-600 dark:text-blue-400'
                    : 'text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400'
                }`}
                aria-label={`Navigate to ${item.name} page`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className='flex items-center space-x-4'>
            {/* Theme Toggle */}
            <button
              onClick={() =>
                setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
              }
              className='p-2 text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors cursor-pointer focus:outline-none'
              aria-label={`Switch to ${
                resolvedTheme === 'dark' ? 'light' : 'dark'
              } mode`}
            >
              {resolvedTheme === 'dark' ? (
                <HiOutlineSun className='w-5 h-5' />
              ) : (
                <HiOutlineMoon className='w-5 h-5' />
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              className='md:hidden p-2 text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors cursor-pointer focus:outline-none'
              onClick={toggleMenu}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? (
                <HiOutlineX className='w-6 h-6' />
              ) : (
                <HiOutlineMenu className='w-6 h-6' />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className='md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800'
          >
            <div className='container mx-auto px-4 py-4'>
              <nav className='flex flex-col space-y-4'>
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={closeMenu}
                    className={`text-base font-medium py-2 px-4 rounded-md transition-colors cursor-pointer ${
                      pathname === item.href
                        ? 'bg-gray-100 dark:bg-gray-800 text-blue-600 dark:text-blue-400'
                        : 'text-gray-700 hover:bg-gray-100 hover:text-blue-600 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-blue-400'
                    }`}
                    aria-label={`Navigate to ${item.name} page`}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
