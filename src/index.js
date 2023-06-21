import React from 'react';
import ReactDOM from 'react-dom/client';
import { Global } from '@emotion/react';

import App from './App';
import { GlobalStyles } from 'styles/GlobalStyles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Global styles={GlobalStyles} />
    <App />
  </React.StrictMode>
);
