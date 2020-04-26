import { createSelector } from 'reselect';

export const getUserToken = state => state?.user?.token;
export const hasFailedLogin = state => state?.user?.failedLogin;
export const hasUnverifiedEmail = state => state?.user?.unverifiedEmail;
export const getActiveUser = state => state?.user;

export const getIsLoggedIn = createSelector(
  getUserToken,
  userToken => !!userToken,
);
