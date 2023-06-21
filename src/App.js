import { ThemeProvider } from '@emotion/react';

import { theme } from 'styles/Theme.styled';
import { useTheme } from 'hooks';
import HomePage from 'pages/HomePage';

function App() {
  const themeMode = useTheme();

  return (
    <ThemeProvider theme={theme[themeMode]}>
      <HomePage />
    </ThemeProvider>
  );
}

export default App;
