import http from '../utilities/http.utility';
import { replaceUrlParams } from '../utilities/service.utility';

const routes = {
  LOGIN: '/login',
  VALIDATE_TOKEN: '/validate-token?token={token}',
};

/**
 * Makes request to log in user with username/password
 * @param {string} email - users email
 * @param {string} password - users password
 * @returns {Promise}
 */
async function login(email, password) {
  const url = `/api${routes.LOGIN}`;
  return http.post(url, { email, password });
}

/**
 * Validates an auth token
 * @param {string} token - token to validate
 * @return {Promise}
 */
async function validateToken(token) {
  const url = `/api${routes.VALIDATE_TOKEN}`;
  const finalUrl = replaceUrlParams(url, { token });
  return http.get(finalUrl);
}

export default {
  login,
  validateToken,
};
