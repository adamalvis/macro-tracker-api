import { replaceUrlParams } from '../utilities/service.utility';
import http from '../utilities/http.utility';

const routes = {
  ALL: '/food',
  FOOD_BY_DAY: '/food?date={date}',
  CREATE: '/food',
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

/**
 * Creates a new food item
 * @param {object} payload
 * @param {string} payload.name - item name
 * @param {number} payload.category - category number
 * @param {number} payload.calories - number of calories
 * @param {number} payload.protein - grams of protein
 * @param {number} payload.fat - grams of fat
 * @param {number} payload.carbohydrates - grams of carbohydrates
 */
export async function create({
  name, category, calories, protein, fat, carbohydrates,
}) {
  const url = `/api${routes.CREATE}`;
  return http.post(url, {
    name,
    category,
    calories,
    protein,
    fat,
    carbohydrates,
  });
}

export default {
  foodByDay,
  create,
};
