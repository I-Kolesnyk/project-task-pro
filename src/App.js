import { ThemeProvider } from '@emotion/react';

import { theme } from 'styles/Theme.styled';
import { useTheme } from 'hooks';
import HomePage from 'pages/HomePage';

import AuthTabs from 'components/AuthTabs/AuthTabs';

function App() {
  const themeMode = useTheme();

  return (
    <ThemeProvider theme={theme[themeMode]}>
      <HomePage />
      <AuthTabs />
    </ThemeProvider>
  );
}

export default App;
