import React from 'react';
import ReactDOM from 'react-dom/client';
import { Global, ThemeProvider } from '@emotion/react';

import App from './App';
import { GlobalStyles } from 'styles/GlobalStyles';
import { theme } from 'styles/Theme.styled';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme.dark}>
    <Global styles={GlobalStyles} />
    <App />
    </ThemeProvider>
  </React.StrictMode>
);