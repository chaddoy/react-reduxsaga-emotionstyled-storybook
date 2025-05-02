import { palette } from './palette';

export const colors = {
  brand: {
    primary: {
      DEFAULT: palette.blue[500],
      hover: palette.blue[600],
      focus: palette.blue[700],
      active: palette.blue[800],
      disabled: palette.blue[300],
    },
    secondary: {
      DEFAULT: palette.blue[400],
      hover: palette.blue[500],
      focus: palette.blue[600],
      active: palette.blue[700],
      disabled: palette.blue[200],
    },
  },
  primary: {
    DEFAULT: palette.slate[500],
    hover: palette.slate[600],
    focus: palette.slate[700],
    active: palette.slate[800],
    disabled: palette.slate[300],
  },
  secondary: {
    DEFAULT: palette.slate[400],
    hover: palette.slate[500],
    focus: palette.slate[600],
    active: palette.slate[700],
    disabled: palette.slate[200],
  },
  danger: {
    DEFAULT: '#EF4444',
    hover: '#DC2626',
    focus: '#B91C1C',
    active: '#991B1B',
    disabled: '#FECACA',
  },
  success: {
    DEFAULT: '#22C55E',
    hover: '#16A34A',
    focus: '#15803D',
    active: '#166534',
    disabled: '#86EFAC',
  },
  warning: {
    DEFAULT: '#FACC15',
    hover: '#EAB308',
    focus: '#CA8A04',
    active: '#A16207',
    disabled: '#FEF08A',
  },
  background: palette.slate[50],
  foreground: palette.slate[900],
  surface: palette.white,
  border: {
    DEFAULT: palette.slate[200],
    hover: palette.slate[300],
    focus: palette.slate[400],
    brand: {
      DEFAULT: palette.blue[500],
      hover: palette.blue[600],
      focus: palette.blue[700],
      active: palette.blue[800],
      disabled: palette.blue[300],
    },
  },
  text: {
    primary: {
      DEFAULT: palette.slate[900],
      hover: palette.slate[700],
      focus: palette.slate[600],
      active: palette.slate[500],
      disabled: palette.slate[300],
    },
    secondary: {
      DEFAULT: palette.slate[700],
      hover: palette.slate[600],
      focus: palette.slate[500],
      active: palette.slate[400],
      disabled: palette.slate[200],
    },
    brand: {
      primary: {
        DEFAULT: palette.blue[500],
        hover: palette.blue[600],
        focus: palette.blue[700],
        active: palette.blue[800],
        disabled: palette.blue[300],
      },
      secondary: {
        DEFAULT: palette.blue[400],
        hover: palette.blue[500],
        focus: palette.blue[600],
        active: palette.blue[700],
        disabled: palette.blue[200],
      },
    },
    muted: palette.slate[500], // For less important text
    inverted: palette.white,
    placeholder: palette.slate[400],
  },
  overlay: 'rgba(0, 0, 0, 0.2)',
  shadow: {
    sm: '0px 1px 2px rgba(0, 0, 0, 0.05)',
    md: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    lg: '0px 4px 6px rgba(0, 0, 0, 0.15)',
    xl: '0px 10px 20px rgba(0, 0, 0, 0.2)',
  },
  gradient: {
    primary: `linear-gradient(90deg, ${palette.blue[500]} 0%, ${palette.blue[700]} 100%)`, // Brand gradient
    secondary: `linear-gradient(90deg, ${palette.slate[300]} 0%, ${palette.slate[500]} 100%)`,
  },
};
