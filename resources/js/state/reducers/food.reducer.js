import actionTypes from '../actionTypes/food.actionTypes';

const initialState = {
  todaysFood: [],
};

function loadTodaysFood(state, action) {
  const { todaysFood } = action;
  return { ...state, todaysFood };
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_TODAYS_FOOD:
      return loadTodaysFood(state, action);
    default:
      return state;
  }
}