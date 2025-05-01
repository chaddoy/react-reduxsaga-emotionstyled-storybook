import { ThemeProvider } from '@emotion/react';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router';
import Kanban from './pages/Kanban';
import GlobalStyle from './components/GlobalStyles';
import { useTheme } from './contexts/theme';
import { darkTheme, lightTheme } from './styles/themes';

function App() {
  const { theme } = useTheme();
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
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
