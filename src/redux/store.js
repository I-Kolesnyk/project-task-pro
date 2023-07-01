import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { authReducer } from './auth/slice';
import { boardsReducer } from './allBoards/slice';
import { boardReducer } from './board/slice';
import { backgroundsReducer } from './background/slice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token', 'user', 'theme'],
};

const allBoardsPersistConfig = {
  key: 'boards',
  storage,
};

const boardPersistConfig = {
  key: 'board',
  storage,
};

const backgroundsConfig = {
  key: 'backgrounds',
  storage,
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    boards: persistReducer(allBoardsPersistConfig, boardsReducer),
    board: persistReducer(boardPersistConfig, boardReducer),
    backgrounds: persistReducer(backgroundsConfig, backgroundsReducer),
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),

  devTools: process.env.NODE_ENV === 'development',
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);
