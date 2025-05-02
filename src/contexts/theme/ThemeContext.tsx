import { createContext } from 'react';

export type Theme = 'base' | 'dark';
interface ThemeContextProps {
  theme: Theme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: 'base',
  toggleTheme: () => {
    console.warn('toggleTheme function is not defined');
  },
});
