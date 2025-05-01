import Button from '../Button';
import { useTheme } from '@/contexts/theme';
import { HiSun, HiMoon } from 'react-icons/hi';
import { Wrapper } from './style';

export default function ThemeButton() {
  const { theme, toggleTheme } = useTheme();
  return (
    <Wrapper>
      <Button onClick={() => toggleTheme()}>
        {theme === 'light' ? <HiSun /> : <HiMoon />}
      </Button>
    </Wrapper>
  );
}
