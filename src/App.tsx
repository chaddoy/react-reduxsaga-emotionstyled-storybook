import { ThemeProvider } from '@emotion/react';
import { theme } from './styles/theme';
import HomePage from './pages/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router';
import BlogPost from './pages/BlogPost';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog-post" element={<BlogPost />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
