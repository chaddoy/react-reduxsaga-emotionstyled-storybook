import { Theme } from '@emotion/react';
import { css, Global } from '@emotion/react';

export default function GlobalStyles() {
  return (
    <Global
      styles={(theme: Theme) =>
        css`
          :root {
            font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
            background-color: ${theme.background};
            color: ${theme.colors.text00};
          }

          body {
            margin: 0;
            padding: 0;
          }
        `
      }
    />
  );
}
