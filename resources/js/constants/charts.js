import colors from "./colors";

export const CHARTS = {
  CALORIES: 'calories',
  PROTEIN: 'protein',
  FAT: 'fat',
  CARBOHYDRATES: 'carbohydrates',
};

export const CHART_CONFIG = {
  [CHARTS.CALORIES]: {
    LABEL: 'Calories',
    BG_COLOR: colors.PRIMARY,
  },
  [CHARTS.PROTEIN]: {
    LABEL: 'Protein',
    BG_COLOR: colors.INFO,
  },
  [CHARTS.FAT]: {
    LABEL: 'Fat',
    BG_COLOR: colors.INFO,
  },
  [CHARTS.CARBOHYDRATES]: {
    LABEL: 'Carbohydrates',
    BG_COLOR: colors.INFO,
  },
};
