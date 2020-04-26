import moment from 'moment';
import { replaceUrlParams } from '../utilities/service.utility';
import http from '../utilities/http.utility';

const routes = {
  ALL: '/food',
  FOOD_BY_DAY: '/food?date={date}',
};

/**
 * Gets food items recorded for the provided day
 * @param {string} date - date string in YYYY-MM-DD format
 */
export async function foodByDay(date) {
  const fullRoute = `/api${routes.FOOD_BY_DAY}`;
  const url = replaceUrlParams(fullRoute, { date });

  return http.get(url);
}

export default {
  foodByDay,
};
