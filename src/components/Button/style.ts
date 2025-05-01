import styled from '@emotion/styled';
import { getBackgroundColor, getSize } from './utils';
import { css } from '@emotion/react';
import { ButtonProps } from './interface';

export const StyledButton = styled.button<ButtonProps>`
  ${({ theme, buttonType = 'primary', size }) => css`
    display: inline-block;
    cursor: pointer;
    border: 0;
    border-radius: ${theme.radius.sm};
    line-height: 1;
    font-weight: ${theme.fontWeight.medium};
    ${getBackgroundColor(theme, buttonType)}
    transition-property: color,background-color,border-color,text-decoration-color,fill,stroke;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 0.15s;
    ${getSize(theme, size)}
  `};
`;
