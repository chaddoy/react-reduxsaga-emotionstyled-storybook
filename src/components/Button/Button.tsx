import { ButtonHTMLAttributes } from 'react';
import { StyledButton } from './style';
import clsx from 'clsx';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Is this the principal call to action on the page? */
  primary?: boolean;
  /** What background color to use */
  backgroundColor?: string;
  /** How large should the button be? */
  size?: 'small' | 'medium' | 'large';
}

export default function Button({
  primary = false,
  size = 'medium',
  backgroundColor,
  children,
  ...props
}: ButtonProps) {
  const mode = primary ? '--primary' : '--secondary';
  return (
    <StyledButton
      type="button"
      className={clsx([`--${size}`, mode])}
      style={{ backgroundColor }}
      {...props}
    >
      {children}
    </StyledButton>
  );
}
