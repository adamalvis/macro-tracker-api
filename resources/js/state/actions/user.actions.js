import axios from 'axios';
import userActionTypes from '../actionTypes/user.actionTypes';
import { getUserToken } from '../selectors/user.selectors';

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
 */
export function login(email, password) {
  return async (dispatch) => {
    const url = '/api/login';

    try {
      const result = await axios.post(url, { email, password });
      const { token, name } = result.data;

      dispatch(setUser({ name, token }));
    } catch(error) {
      const status = error?.response?.status;
      
      if (status === 401) {
        dispatch(setFailedLogin());
      }
    }
  };
}

/**
 * Sets failedLogin user state to true
 */
export function setFailedLogin() {
  return { type: userActionTypes.SET_FAILED_LOGIN };
}
