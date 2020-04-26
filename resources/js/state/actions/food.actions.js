import moment from 'moment';
import actionTypes from '../actionTypes/food.actionTypes';
import foodService from '../../services/food.service';

/**
 * Loads all food items for the current day
 */
export function loadTodaysFood() {
  return async (dispatch) => {
    try {
      const date = moment().format('YYYY-MM-DD');
      const todaysFood = await foodService.foodByDay(date);

      dispatch({
        type: actionTypes.LOAD_TODAYS_FOOD,
        todaysFood,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
