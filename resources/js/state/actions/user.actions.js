import userActionTypes from '../actionTypes/user.actionTypes';
import { setAuthToken } from '../../utilities/auth.utility';
import userService from '../../services/user.service';

/**
 * Set's a user in state
 * 
 * @param {object} payload
 * @param {string} payload.name - user's name
 * @param {string} payload.email - user's email
 * @param {string} payload.token - user's auth token
 * @return {object}
 */
export function setUser({ name, email, token }) {
  // stores token in cookie
  setAuthToken(token);

  return {
    type: userActionTypes.SET_USER,
    user: {
      name,
      email,
      token,
      failedLogin: false,
    },
  };
}

/**
 * Attempts to login in current user by username & password
 * 
 * @param {string} email - attempted username
 * @param {string} password - attempted password
 * @return {Function} - thunk
 */
export function login(email, password) {
  return async (dispatch) => {
    try {
      const result = await userService.login(email, password);
      const { token, name } = result;

      dispatch(setUser({ name, email, token }));
    } catch(error) {
      const status = error?.response?.status;
      
      if (status === 401) {
        dispatch(setFailedLogin());
      }

      if (status === 403) {
        dispatch(setUnverifiedEmail());
      }
    }
  };
}

/**
 * Validates locally stored auth token, if valid sets user in state
 * @param {string} token - stored auth token
 * @returns {Function} - thunk
 */
export function validateToken(token) {
  return async (dispatch) => {
    try {
      const result = await userService.validateToken(token);
      const { email, name } = result;

      dispatch(setUser({ name, email, token }));
    } catch (error) {
      console.log(error);
    }
  };
}

/**
 * Sets failedLogin user state to true
 */
export function setFailedLogin() {
  return { type: userActionTypes.SET_FAILED_LOGIN };
}

/**
 * Sets unverifiedEmail user state to true
 */
export function setUnverifiedEmail() {
  return { type: userActionTypes.SET_UNVERIFIED_EMAIL };
}
