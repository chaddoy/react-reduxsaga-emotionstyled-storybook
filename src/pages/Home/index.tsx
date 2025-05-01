import reactLogo from '@/assets/react.svg';
import emotionLogo from '@/assets/emotion.svg';
import storybookLogo from '@/assets/storybook.svg';
import viteLogo from '/vite.svg';
import Button from '@/components/Button';
import { NavLink } from 'react-router';
import { Card, Content, Img, Wrapper } from './style';
import ThemeButton from '@/components/ThemeButton';

export default function HomePage() {
  return (
    <Wrapper>
      <ThemeButton />

      <Content>
        <div>
          <a href="https://vite.dev" target="_blank">
            <Img src={viteLogo} alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <Img src={reactLogo} className="react" alt="React logo" />
          </a>
          <a href="https://emotion.sh" target="_blank">
            <Img src={emotionLogo} className="emotion" alt="Emotion logo" />
          </a>
          <a href="https://storybook.js.org/" target="_blank">
            <Img
              src={storybookLogo}
              className="storybook"
              alt="Storybook logo"
            />
          </a>
        </div>

        <h1>Vite + React + Emotion/Styled + Storybook</h1>

        <Card>
          <NavLink to="/kanban">
            <Button>Kanban</Button>
          </NavLink>
        </Card>
      </Content>
    </Wrapper>
  );
}
