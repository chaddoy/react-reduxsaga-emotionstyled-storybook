import reactLogo from '@/assets/react.svg';
import emotionLogo from '@/assets/emotion.svg';
import storybookLogo from '@/assets/storybook.svg';
import viteLogo from '/vite.svg';
import Button from '@/components/Button';
import { NavLink } from 'react-router';
import * as S from './style';

export default function HomePage() {
  return (
    <S.Wrapper>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://emotion.sh" target="_blank">
          <img src={emotionLogo} className="logo emotion" alt="Emotion logo" />
        </a>
        <a href="https://storybook.js.org/" target="_blank">
          <img
            src={storybookLogo}
            className="logo storyook"
            alt="Storyook logo"
          />
        </a>
      </div>
      <h1>Vite + React + Emotion/Styled + Storybook</h1>
      <div className="card">
        <NavLink to="/blog-post">
          <Button>Blog Post</Button>
        </NavLink>
      </div>
    </S.Wrapper>
  );
}
