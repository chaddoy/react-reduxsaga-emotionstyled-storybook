import { ThemeProvider } from '@emotion/react';
import { theme } from './styles/theme';
import HomePage from './pages/HomePage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <HomePage />
    </ThemeProvider>
  );
}

export default App;
