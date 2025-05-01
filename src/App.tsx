import { ThemeProvider } from '@emotion/react';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router';
import BlogPost from './pages/BlogPost';
import GlobalStyle from './components/GlobalStyles';
import { lightTheme } from './styles/themes';

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog-post" element={<BlogPost />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
