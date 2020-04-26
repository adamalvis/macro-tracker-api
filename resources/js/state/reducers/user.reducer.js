import actionTypes from '../actionTypes/user.actionTypes';
import { hasFailedLogin } from '../selectors/user.selectors';

const initialState = {
  token: null,
  name: '',
  email: '',
  failedLogin: false,
};

function setUser(state, action) {
  const { user } = action;
  return { ...state, ...user };
}

function setFailedLogin(state) {
  console.log('setting failedLogin to true')
  return { ...state, failedLogin: true };
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_USER:
      return setUser(state, action);
    case actionTypes.SET_FAILED_LOGIN:
      return setFailedLogin(state);
    default:
      return state;
  }
};
