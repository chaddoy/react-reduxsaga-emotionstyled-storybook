import ThemeButton from '@/components/ThemeButton';
import { HeaderWrapper } from './style';
import { HiOutlineHome } from 'react-icons/hi';
import Button from '@/components/Button';
import { NavLink } from 'react-router';

export default function Header() {
  return (
    <HeaderWrapper>
      <NavLink to="/">
        <Button buttonType="ghost" size="small">
          <HiOutlineHome size={24} />
        </Button>
      </NavLink>

      <ThemeButton />
    </HeaderWrapper>
  );
}
