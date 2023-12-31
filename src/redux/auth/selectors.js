export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectIsUserLoading = state => state.auth.isLoading;
export const selectUserName = state => state.auth.user.name;
export const selectUserAvatar = state => state.auth.user.avatar;
export const selectUserId = state => state.auth.user.id;
export const selectTheme = state => state.auth.theme;
export const selectIsFetchingCurrentUser = state =>
  state.auth.isFetchingCurrentUser;
export const selectToken = state => state.auth.token;
export const selectUserEmail = state => state.auth.user.email;
