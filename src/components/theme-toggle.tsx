'use client';

import { useTheme } from 'next-themes';
import { Button } from './ui/button';
import { MoonIcon, SunIcon } from 'lucide-react';

/**
 * Component for toggling between light and dark themes.
 *
 * @returns The rendered ThemeToggle component.
 */
export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  /**
   * Toggles the theme between light and dark.
   */
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <Button size={'sm'} variant={'ghost'} onClick={toggleTheme}>
      <SunIcon size={16} className="hidden text-orange-400 dark:inline" />
      <MoonIcon size={16} className="text-sky-950 dark:hidden" />
      <span className="sr-only">Toggle between dark and lighttheme</span>
    </Button>
  );
}
