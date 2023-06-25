export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectIsLoading = state => state.auth.isLoading;
export const selectUserName = state => state.auth.user.name;
export const selectUserAvatar = state => state.auth.user.avatar;
export const selectIsFetchingCurrentUser = state => state.auth.isFetchingCurrentUser;