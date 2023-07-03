import { lazy, Suspense, useEffect } from 'react';
import { ThemeProvider } from '@emotion/react';
import { useDispatch } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { theme } from 'styles/Theme.styled';
import { useTheme, useIsFetching } from 'hooks';
import { currentUser } from 'redux/auth/operations';
import ScreenPage from 'components/ScreenPage/ScreenPage';
import Layout from 'components/Layout/Layout';
import PrivateRoute from 'components/PrivateRoute';
import RestrictedRoute from 'components/RestrictedRoute';

const HomePage = lazy(() => import('pages/HomePage'));
const WelcomePage = lazy(() => import('pages/WelcomePage'));
const AuthPage = lazy(() => import('pages/AuthPage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage'));

function App() {
  const themeMode = useTheme();
  const isFetching = useIsFetching();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);

  return (
    !isFetching && (
      <ThemeProvider theme={theme[themeMode]}>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route
              path="/welcome"
              element={
                <RestrictedRoute>
                  <WelcomePage />
                </RestrictedRoute>
              }
            />

            <Route
              path="/auth/:id"
              element={
                <RestrictedRoute
                  redirectTo='/home'
                  restricted
                >
                  <AuthPage />
                </RestrictedRoute>
              }
            />
            <Route
              path="/home"
              element={
                <PrivateRoute redirectTo="/auth/login">
                  <Layout />
                </PrivateRoute>
              }
            >
              <Route
                index
                element={
                  <PrivateRoute redirectTo="/auth/login">
                    <HomePage />
                  </PrivateRoute>
                }
              />
              <Route
                path="/home/:boardName"
                element={
                  <PrivateRoute redirectTo="/auth/login">
                    <ScreenPage />
                  </PrivateRoute>
                }
              />
            </Route>
            <Route path="/" element={<Navigate to="/welcome" />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </ThemeProvider>
    )
  );
}

export default App;
