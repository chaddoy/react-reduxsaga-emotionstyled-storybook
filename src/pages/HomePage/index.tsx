import { useState } from 'react';
import reactLogo from '@/assets/react.svg';
import emotionLogo from '@/assets/emotion.svg';
import storybookLogo from '@/assets/storybook.svg';
import viteLogo from '/vite.svg';
import '@/App.css';
import Button from '@/components/Button';

export default function HomePage() {
  const [count, setCount] = useState(0);

  return (
    <div>
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
        <Button primary onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
      </div>
    </div>
  );
}
