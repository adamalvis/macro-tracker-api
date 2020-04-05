import { createSelector } from 'reselect';

export const getUserToken = state => state && state.user && state.user.token;
export const hasFailedLogin = state => state && state.user && state.user.failedLogin;

export const getIsLoggedIn = createSelector(
  getUserToken,
  userToken => !!userToken,
);
