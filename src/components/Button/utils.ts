import {Theme, ThemeSize} from "@/styles/theme";

export const getBackgroundColor = (theme: Theme, variant?: string) => {
  switch (variant) {
    case 'primary':
      return theme.colors.primary;
    case 'secondary':
      return theme.colors.secondary;
    default:
      return 'transparent';
  }
};

export const getTextColor = (theme: Theme, variant?: string) => {
  return variant ? theme.colors.white : theme.colors.text;
};

export const getSizeStyles = (theme: Theme, size?: ThemeSize) => {
  return size ? theme.sizes[size] : theme.sizes.medium;
};
