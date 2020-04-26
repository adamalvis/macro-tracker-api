import axios from 'axios';

/**
 * Globally sets auth token for axios
 * @param {string} token - auth token
 */
function setAuthToken(token) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

/**
 * Performs GET request to specificed url
 * @param {string} url - url to GET
 * @param {object} config - configuration object
 * @return {Promise}
 */
async function get(url, config = {}) {
  const result = await axios.get(url, config);
  return result?.data;
}

/**
 * Performs a POST request to specified url
 * @param {string} url - url to POST to
 * @param {object} data - POST params
 * @param {object} config - configuration object
 * @returns {Promise}
 */
async function post(url, data, config = {}) {
  const result = await axios.post(url, data, config);
  return result?.data;
}

export default {
  get,
  post,
  setAuthToken,
};
