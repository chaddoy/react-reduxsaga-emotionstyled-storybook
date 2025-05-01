import { Theme } from '@emotion/react';
import { css, Global } from '@emotion/react';

export default function GlobalStyles() {
  return (
    <Global
      styles={(theme: Theme) =>
        css({
          ':root': {
            fontFamily: 'system-ui, Avenir, Helvetica, Arial, sans-serif',
            backgroundColor: theme.background,
          },
        })
      }
    />
  );
}
