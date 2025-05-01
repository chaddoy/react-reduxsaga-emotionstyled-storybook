import { lightTheme } from './light';
import { palette } from './defaults';

export const darkTheme = {
  ...lightTheme,
  colors: {
    background: palette.slate[950],
    foreground: palette.slate[50],

    primary: palette.slate[50],
    primaryInteract: palette.slate[100],
    secondary: palette.slate[800],
    secondaryInteract: palette.slate[700],
    tertiary: palette.slate[700],
    tertiaryInteract: palette.slate[800],

    border: palette.slate[700],
    muted: palette.slate[800],

    // Text colors
    text00: palette.slate[50],
    text01: palette.slate[300],
    text02: palette.slate[400],
    text03: palette.charcoal,
  },

  shadows: {
    elevation: {
      1: '0 1px 2px rgba(0, 0, 0, 0.12)',
      2: '0 3px 6px rgba(0, 0, 0, 0.16)',
      3: '0 10px 20px rgba(0, 0, 0, 0.19)',
    },
  },
};
