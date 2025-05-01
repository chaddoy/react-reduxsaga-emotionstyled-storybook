import { fontSize, fontWeight, lineHeight, palette, radius } from './defaults';

export const lightTheme = {
  palette,
  radius,
  fontWeight,
  fontSize,
  lineHeight,

  colors: {
    primary: palette.zinc[900],
    primaryInteract: palette.zinc[800],
    secondary: palette.zinc[200],
    secondaryInteract: palette.zinc[100],

    // Text colors
    text00: palette.white,
    text01: palette.zinc[400],
    text02: palette.zinc[600],
    text03: palette.charcoal,
  },
  background: palette.powder,
};
