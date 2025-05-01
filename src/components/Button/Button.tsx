import { ButtonProps } from './interface';
import { StyledButton } from './style';

export default function Button({
  buttonType = 'primary',
  size = 'medium',
  backgroundColor,
  children,
  ...props
}: ButtonProps) {
  return (
    <StyledButton
      type="button"
      style={{ backgroundColor }}
      buttonType={buttonType}
      size={size}
      {...props}
    >
      {children}
    </StyledButton>
  );
}
