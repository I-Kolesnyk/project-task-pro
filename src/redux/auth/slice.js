import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  currentUser,
  userRegister,
  userLogin,
  userLogOut,
  editTheme,
} from './operations';

const initialState = {
  user: { name: '', email: '', avatar: '', id: '' },
  token: "",
  theme: 'dark',
  isLoggedIn: false,
  isLoading: false,
  isFetchingCurrentUser: false,
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(userRegister.fulfilled, (state, action) => {
        state.user.name = action.payload.data.user.name;
        state.user.email = action.payload.data.user.email;
        state.user.avatar = action.payload.data.user.avatarUrl;
        state.user.id = action.payload.data.user._id;
        state.token = action.payload.data.token;
        state.theme = action.payload.data.user.theme;
        state.isLoggedIn = true;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.user.name = action.payload.data.user.name;
        state.user.email = action.payload.data.user.email;
        state.user.avatar = action.payload.data.user.avatarUrl;
        state.user.id = action.payload.data.user._id;
        state.token = action.payload.data.token;
        state.theme = action.payload.data.user.theme;
        state.isLoggedIn = true;
      })
      .addCase(userLogOut.fulfilled, state => {
        state.user = { name: '', email: '', avatar: '' };
        state.token = "";
        state.theme = 'dark';
        state.isLoggedIn = false;
      })
      .addCase(editTheme.fulfilled, (state, action) => {
        state.theme = action.payload.data.theme;
      })
      .addCase(currentUser.fulfilled, (state, action) => {
        state.token = action.payload.data.token;
        state.isLoggedIn = true;
        state.isFetchingCurrentUser = false;
      })
      .addCase(currentUser.pending, state => {
        state.isFetchingCurrentUser = true;
      })
      .addCase(currentUser.rejected, state => {
        state.isFetchingCurrentUser = false;
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

const extraActions = [userRegister, userLogin, userLogOut, editTheme];

const getActions = type => extraActions.map(action => action[type]);

export const authReducer = authSlice.reducer;
