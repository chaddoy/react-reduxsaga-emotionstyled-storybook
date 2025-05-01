import { lightTheme, Theme } from '@/styles/themes';
import { createContext } from 'react';

interface ThemeContextProps {
  theme: Theme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProps | undefined>({
  theme: lightTheme,
  toggleTheme: () => {
    console.warn('toggleTheme function is not defined');
  },
});
