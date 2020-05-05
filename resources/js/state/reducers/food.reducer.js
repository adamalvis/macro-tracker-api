import actionTypes from '../actionTypes/food.actionTypes';

const initialState = {
  todaysFood: [],
};

function loadTodaysFood(state, action) {
  const { todaysFood } = action;
  return { ...state, todaysFood };
}

function addFood(state, action) {
  const { food } = action;

  return {
    ...state,
    todaysFood: [
      ...state.todaysFood,
      food,
    ],
  };
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_TODAYS_FOOD:
      return loadTodaysFood(state, action);
    case actionTypes.ADD_FOOD:
      return addFood(state, action);
    default:
      return state;
  }
}