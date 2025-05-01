import { fontSize, fontWeight, lineHeight, palette, radius } from './defaults';

export const lightTheme = {
  palette,
  radius,
  fontWeight,
  fontSize,
  lineHeight,

  colors: {
    background: palette.slate[50],
    foreground: palette.slate[900],

    primary: palette.slate[900],
    primaryInteract: palette.slate[700],
    secondary: palette.slate[100],
    secondaryInteract: palette.slate[50],
    tertiary: palette.slate[200],
    tertiaryInteract: palette.slate[100],

    border: palette.slate[200],
    muted: palette.slate[100],

    // Text colors
    text00: palette.slate[900],
    text01: palette.slate[700],
    text02: palette.slate[500],
    text03: palette.white,
  },

  shadows: {
    elevation: {
      1: '0 1px 2px rgba(0, 0, 0, 0.05)',
      2: '0 2px 4px rgba(0, 0, 0, 0.07)',
      3: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
  },
};
