import { lazy, Suspense } from 'react';
import { ThemeProvider } from '@emotion/react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { theme } from 'styles/Theme.styled';
import { useTheme } from 'hooks';
import ScreenPage from 'components/ScreenPage/ScreenPage';
import Layout from 'components/Layout/Layout';
// import PrivateRoute from 'components/PrivateRoute';
// import RestrictedRoute from 'components/RestrictedRoute';


const HomePage = lazy(() => import('pages/HomePage'));
const WelcomePage = lazy(() => import('pages/WelcomePage'));
const AuthPage = lazy(() => import('pages/AuthPage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage'));

function App()
{
  const themeMode = useTheme();

  return (
    <ThemeProvider theme={theme[themeMode]}>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>

          {/* <RestrictedRoute path="/welcome" > */}
          <Route path="/welcome" element={<WelcomePage />} />
          {/* </RestrictedRoute> */}

          {/* <RestrictedRoute path="/auth/:id" > */}
          <Route path="/auth/:id" element={<AuthPage />} />
          {/* </RestrictedRoute> */}

          {/* <PrivateRoute path="/home"> */}
          <Route path="/home" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/home/:boardName" element={<ScreenPage />} />
          </Route>
          {/* </PrivateRoute> */}
          <Route path="/" element={<Navigate to="/welcome" />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
