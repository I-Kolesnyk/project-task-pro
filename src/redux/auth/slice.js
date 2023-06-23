import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { userRegister, userLogin, userLogOut } from './operations';

const initialState = {
  user: { name: '', email: '', avatar: '' },
  token: null,
  theme: 'dark',
  isLoggedIn: false,
  isLoading: false,
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(userRegister.fulfilled, (state, action) => {})
      .addCase(userLogin.fulfilled, (state, action) => {
        state.user.name = action.payload.user.name;
        state.user.email = action.payload.user.email;
        state.user.avatar = action.payload.user.avater;
        state.token = action.payload.token;
        state.theme = action.payload.theme;
        state.isLoggedIn = true;
      })
      .addCase(userLogOut.fulfilled, state => {
        state.user = { name: '', email: '', avatar: '' };
        state.token = null;
        state.theme = 'dark';
        state.isLoggedIn = false;
      })
      .addMatcher(isAnyOf(...getActions('fulfilled')), handleFulfilled)
      .addMatcher(isAnyOf(...getActions('pending')), handlePending)
      .addMatcher(isAnyOf(...getActions('rejected')), handleRejected),
});

const handleFulfilled = state => {
  state.isLoading = false;
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = state => {
  state.isLoading = false;
};

const extraActions = [userRegister, userLogin, userLogOut];

const getActions = type => extraActions.map(action => action[type]);

export const authReducer = authSlice.reducer;
