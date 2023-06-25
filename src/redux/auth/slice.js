import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { userRegister, userLogin, userLogOut } from './operations';

const initialState = {
  user: { name: '', email: '', avatar: '' },
  token: null,
  theme: 'dark',
  isLoggedIn: false,
  isLoading: false,
  isFetchingCurrentUser: false,
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser(state, actions) {
      state.isLoading = actions.payload;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(userRegister.fulfilled, (state, action) => {})
      .addCase(userLogin.fulfilled, (state, action) => {
        state.user.name = action.payload.data.user.name;
        state.user.email = action.payload.data.user.email;
        state.user.avatar = action.payload.data.user.avatarUrl;
        state.token = action.payload.data.token;
        state.theme = action.payload.data.user.theme;
        state.isLoggedIn = true;
      })
      .addCase(userLogOut.fulfilled, state => {
        state.user = { name: '', email: '', avatar: '' };
        state.token = null;
        state.theme = 'dark';
        state.isLoggedIn = false;
      })
      // .addCase(currentUser.fulfilled, (state, action) => {
      //   state.token = action.payload.data.token;
      //   state.isLoggedIn = true;
      //   state.isFetchingCurrentUser = false;
      // })
      // .addCase(currentUser.pending, state => {
      //   state.isFetchingCurrentUser = true;
      // })
      // .addCase(currentUser.rejected, state => {
      //   state.isFetchingCurrentUser = false;
      // })
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

export const {setUser} = authSlice.actions;

export const authReducer = authSlice.reducer;
