import { ThemeProvider } from '@emotion/react';
import { Route, Routes } from "react-router-dom"

import { theme } from 'styles/Theme.styled';
import { useTheme } from 'hooks';
import HomePage from 'pages/HomePage';
import WelcomePage from 'pages/WelcomePage';
import AuthPage from 'pages/AuthPage';
import NotFoundPage from 'pages/NotFoundPage';

function App()
{
  const themeMode = useTheme();

  return (
    <ThemeProvider theme={theme[themeMode]}>
      <Routes>
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/auth/:id" element={<AuthPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/" element={<WelcomePage redirectTo="/welcome" />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
