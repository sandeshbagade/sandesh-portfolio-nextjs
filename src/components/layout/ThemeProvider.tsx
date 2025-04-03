'use client';

import { useState, useEffect } from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import type { ThemeProviderProps } from 'next-themes/dist/types';

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [mounted, setMounted] = useState(false);

  // useEffect only runs on the client, so we need to ensure
  // the component only renders after client-side hydration
  useEffect(() => {
    setMounted(true);
    console.log('ThemeProvider mounted'); // Add logging for debugging
  }, []);

  if (!mounted) {
    return <>{children}</>; // Render children without theme provider during SSR
  }

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
