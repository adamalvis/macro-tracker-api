/**
 * Returns
 * @param {array} food - array of food objects
 * @returns {object} { calories: Number, protein: Number, fat: Number, carbohydrates: Number }
 */
export function getMacroTotals(food) {
  const totals = {
    calories: 0,
    protein: 0,
    fat: 0,
    carbohydrates: 0,
  };

  food.forEach((food) => {
    totals.calories += food.calories;
    totals.protein += food.protein;
    totals.fat += food.fat;
    totals.carbohydrates += food.carbohydrates;
  });

  return totals;
}
