export const theme = {
  colors: {
    primary: '#007bff',
    secondary: '#6c757d',
    danger: '#dc3545',
    white: '#fff',
    text: '#000',
  },
  sizes: {
    small: {
      padding: '4px 8px',
      fontSize: '12px',
    },
    medium: {
      padding: '8px 16px',
      fontSize: '16px',
    },
    large: {
      padding: '12px 24px',
      fontSize: '20px',
    },
  },
};

export type Theme = typeof theme;
export type ThemeSize = keyof typeof theme.sizes;
