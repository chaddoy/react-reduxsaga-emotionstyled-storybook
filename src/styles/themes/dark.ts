import { baseTheme } from './base';
import { palette } from './palette';

export const darkTheme = {
  ...baseTheme,
  colors: {
    ...baseTheme.colors,
    primary: {
      DEFAULT: palette.slate[300],
      hover: palette.slate[400],
      focus: palette.slate[500],
      active: palette.slate[600],
      disabled: palette.slate[700],
    },
    secondary: {
      DEFAULT: palette.slate[400],
      hover: palette.slate[500],
      focus: palette.slate[600],
      active: palette.slate[700],
      disabled: palette.slate[800],
    },
    background: palette.slate[900],
    foreground: palette.white,
    surface: palette.slate[800],
    border: {
      DEFAULT: palette.slate[700],
      hover: palette.slate[600],
      focus: palette.slate[500],
      brand: {
        DEFAULT: palette.blue[400],
        hover: palette.blue[500],
        focus: palette.blue[600],
        active: palette.blue[700],
        disabled: palette.blue[300],
      },
    },
    text: {
      primary: {
        DEFAULT: palette.slate[50],
        hover: palette.slate[100],
        focus: palette.slate[200],
        active: palette.slate[300],
        disabled: palette.slate[400],
      },
      secondary: {
        DEFAULT: palette.slate[400],
        hover: palette.slate[500],
        focus: palette.slate[600],
        active: palette.slate[700],
        disabled: palette.slate[800],
      },
      brand: {
        primary: {
          DEFAULT: palette.blue[400],
          hover: palette.blue[500],
          focus: palette.blue[600],
          active: palette.blue[700],
          disabled: palette.blue[300],
        },
        secondary: {
          DEFAULT: palette.blue[300],
          hover: palette.blue[400],
          focus: palette.blue[500],
          active: palette.blue[600],
          disabled: palette.blue[200],
        },
      },
      muted: palette.slate[400],
      inverted: palette.charcoal,
      placeholder: palette.slate[500],
    },
  },
};
