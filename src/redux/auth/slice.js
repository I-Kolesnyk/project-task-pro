import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import userRegister from './operations/userRegister';
import userLogin from './operations/userLogin';
import userLogOut from './operations/userLogOut';
import editTheme from './operations/editTheme';
import currentUser from './operations/currentUser';

const initialState = {
  user: { name: '', email: '', avatar: '', id: '' },
  token: null,
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
        state.token = null;
        state.theme = 'dark';
        state.isLoggedIn = false;
      })
      // .addCase(editTheme.fulfilled, (state, action) => {
      //   state.theme = action.payload.data.theme;
      // })
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

// export const { setUser } = authSlice.actions;

// const setError = (state, action) => {
//   state.loading = false;
//   state.error = action.payload;
// };

// const setLoading = state => {
//   state.loading = true;
//   state.error = null;
// };

// const authSlice = createSlice({
//   name: 'auth',
//   initialState: {
//     user: { name: '', email: '', avatar: '', id: '' },
//     token: null,
//     theme: 'dark',
//     isLoggedIn: false,
//     isLoading: false,
//     isFetchingCurrentUser: false,
//     error: null,
//   },
//   reducers: {},
//   extraReducers: {
//     [userRegister.pending]: setLoading,
//     [userRegister.fulfilled]: (state, action) => {
//       state.user.name = action.payload.data.user.name;
//       state.user.email = action.payload.data.user.email;
//     },
//     [userLogin.rejected]: setError,
//     [userLogin.pending]: setLoading,
//     [userLogin.fulfilled]: (state, action) => {
//       state.user.name = action.payload.data.user.name;
//       state.user.email = action.payload.data.user.email;
//       state.user.avatar = action.payload.data.user.avatarUrl;
//       state.user.id = action.payload.data.user._id;
//       state.token = action.payload.data.token;
//       state.theme = action.payload.data.user.theme;
//       state.isLoggedIn = true;
//     },
//     [userLogOut.fulfilled]: state => {
//       state.user = { name: '', email: '', avatar: '' };
//       state.token = null;
//       state.theme = 'dark';
//       state.isLoggedIn = false;
//     },
//     [userLogOut.rejected]: setError,
//     [editTheme.pending]: setLoading,
//     [editTheme.fulfilled]: (state, action) => {
//       state.theme = action.payload.data.theme;
//     },
//     [currentUser.rejected]: state => {
//       state.isFetchingCurrentUser = false;
//     },
//     [currentUser.pending]: state => {
//       state.isFetchingCurrentUser = true;
//     },
//     [currentUser.fulfilled]: (state, action) => {
//       state.token = action.payload.data.token;
//       state.isLoggedIn = true;
//       state.isFetchingCurrentUser = false;
//     },
//   },
// });

export const authReducer = authSlice.reducer;
