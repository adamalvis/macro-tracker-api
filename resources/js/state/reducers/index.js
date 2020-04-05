import { combineReducers } from "redux";
import navigation from './navigation.reducer';
import user from './user.reducer';

export default combineReducers({
  navigation,
  user,
});
