import { lazy, Suspense } from 'react';
import { ThemeProvider } from '@emotion/react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { theme } from 'styles/Theme.styled';
import { useTheme } from 'hooks';
import ScreenPage from 'components/ScreenPage/ScreenPage';
import Layout from 'components/Layout/Layout';

const HomePage = lazy(() => import('pages/HomePage'));
const WelcomePage = lazy(() => import('pages/WelcomePage'));
const AuthPage = lazy(() => import('pages/AuthPage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage'));

function App() {
  const themeMode = useTheme();

  return (
    <ThemeProvider theme={theme[themeMode]}>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/welcome" element={<WelcomePage />} />
          <Route path="/auth/:id" element={<AuthPage />} />
          <Route path="/home" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/home/:boardName" element={<ScreenPage />} />
          </Route>
          <Route path="/" element={<Navigate to="/welcome" />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
