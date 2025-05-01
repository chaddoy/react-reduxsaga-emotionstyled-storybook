import { Theme } from '@emotion/react';
import { css, Global } from '@emotion/react';

export default function GlobalStyles() {
  return (
    <Global
      styles={(theme: Theme) =>
        css`
          :root {
            font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
            background-color: ${theme.colors.background};
            color: ${theme.colors.foreground};
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
