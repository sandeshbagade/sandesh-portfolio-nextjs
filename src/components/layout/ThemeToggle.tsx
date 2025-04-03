'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { HiSun, HiMoon } from 'react-icons/hi';

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
    console.log('ThemeToggle mounted, current theme:', theme);
  }, [theme]);

  const toggleTheme = () => {
    console.log('Toggling theme from', theme);
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  if (!mounted) {
    // Return a placeholder while the component is mounting
    return (
      <button
        aria-label='Loading theme toggle'
        type='button'
        className='flex items-center justify-center rounded-full p-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800'
      >
        <div className='h-5 w-5 bg-gray-300 rounded-full animate-pulse'></div>
      </button>
    );
  }

  return (
    <button
      aria-label='Toggle Dark Mode'
      type='button'
      className='flex items-center justify-center rounded-full p-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800'
      onClick={toggleTheme}
    >
      {theme === 'dark' ? (
        <HiSun className='h-5 w-5 text-yellow-500' />
      ) : (
        <HiMoon className='h-5 w-5 text-blue-800' />
      )}
    </button>
  );
}
