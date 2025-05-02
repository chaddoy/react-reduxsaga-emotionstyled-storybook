import { css, Theme } from '@emotion/react';
import { ButtonType, Size } from './interface';

export const getBackgroundColor = (
  theme: Theme,
  variant: ButtonType = 'primary',
) => {
  switch (variant) {
    case 'primary':
      return css`
        background-color: ${theme.colors.brand.primary.DEFAULT};
        color: ${theme.colors.text.brand.primary.DEFAULT};

        &:hover {
          background-color: ${theme.colors.brand.primary.hover};
        }
      `;

    case 'secondary':
      return css`
        background-color: ${theme.colors.brand.secondary.DEFAULT};
        color: ${theme.colors.text.brand.secondary.DEFAULT};

        &:hover {
          background-color: ${theme.colors.brand.secondary.hover};
        }
      `;

    case 'ghost':
      return css`
        background-color: transparent;
        color: ${theme.colors.text.brand.primary.DEFAULT};

        &:hover {
          background-color: ${theme.colors.secondary.hover};
        }
      `;
  }
};

export const getSize = (theme: Theme, size: Size = 'medium') => {
  switch (size) {
    case 'small':
      return css`
        padding: 10px 16px;
        font-size: ${theme.typography.fontSize.xs};
      `;

    case 'medium':
      return css`
        padding: 11px 20px;
        font-size: ${theme.typography.fontSize.sm};
      `;

    case 'large':
      return css`
        padding: 12px 24px;
        font-size: ${theme.typography.fontSize.base};
      `;
  }
};
