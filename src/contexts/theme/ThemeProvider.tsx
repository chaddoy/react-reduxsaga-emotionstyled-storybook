import { ReactNode, useEffect, useState } from 'react';
import { Theme, ThemeContext } from './ThemeContext';

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('base');

  useEffect(() => {
    const localTheme = (localStorage.getItem('theme') || 'base') as Theme;

    setTheme(localTheme);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => {
      const newTheme = prev === 'base' ? 'dark' : 'base';
      localStorage.setItem('theme', newTheme);
      return newTheme;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
