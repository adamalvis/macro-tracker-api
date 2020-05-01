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

  food.forEach((item) => {
    totals.calories += item.calories;
    totals.protein += item.protein;
    totals.fat += item.fat;
    totals.carbohydrates += item.carbohydrates;
  });

  return totals;
}
