import { lightTheme } from './light';
import { palette } from './defaults';

export const darkTheme = {
  ...lightTheme,
  colors: {
    primary: palette.zinc[50],
    primaryInteract: palette.zinc[300],
    secondary: palette.zinc[800],
    secondaryInteract: palette.zinc[900],

    // Text colors
    text00: palette.charcoal,
    text01: palette.zinc[600],
    text02: palette.zinc[400],
    text03: palette.white,
  },
  background: palette.charcoal,
};
