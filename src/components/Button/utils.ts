import { css, Theme } from '@emotion/react';
import { ButtonType, Size } from './interface';

export const getBackgroundColor = (
  theme: Theme,
  variant: ButtonType = 'primary',
) => {
  switch (variant) {
    case 'primary':
      return css`
        background-color: ${theme.colors.primary};
        color: ${theme.colors.text03};

        &:hover {
          background-color: ${theme.colors.primaryInteract};
        }
      `;

    case 'secondary':
      return css`
        background-color: ${theme.colors.secondary};
        color: ${theme.colors.text01};

        &:hover {
          background-color: ${theme.colors.secondaryInteract};
        }
      `;
  }
};

export const getSize = (theme: Theme, size: Size = 'medium') => {
  switch (size) {
    case 'small':
      return css`
        padding: 10px 16px;
        font-size: ${theme.fontSize.xs};
      `;

    case 'medium':
      return css`
        padding: 11px 20px;
        font-size: ${theme.fontSize.sm};
      `;

    case 'large':
      return css`
        padding: 12px 24px;
        font-size: ${theme.fontSize.base};
      `;
  }
};
