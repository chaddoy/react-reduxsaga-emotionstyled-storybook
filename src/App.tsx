import { ThemeProvider } from '@emotion/react';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router';
import Kanban from './pages/Kanban';
import GlobalStyle from './components/GlobalStyles';
import { useTheme } from './contexts/theme';
import { baseTheme, darkTheme } from './styles/themes';

function App() {
  const { theme } = useTheme();
  return (
    <ThemeProvider theme={theme === 'base' ? baseTheme : darkTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/kanban" element={<Kanban />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
