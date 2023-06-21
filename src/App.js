import { ThemeProvider } from '@emotion/react';

import { theme } from 'styles/Theme.styled';
import { useTheme } from 'hooks';

function App() {
  const themeMode = useTheme();

  return (
    <ThemeProvider theme={theme[themeMode]}>      
      <div></div>
    </ThemeProvider>
  );
}

export default App;
