import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Global } from '@emotion/react';

import App from './App';
import { store, persistor } from 'redux/store';
import { GlobalStyles } from 'styles/GlobalStyles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Global styles={GlobalStyles} />
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {/* <BrowserRouter basename="/"> */}
          <App />
        {/* </BrowserRouter> */}
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
