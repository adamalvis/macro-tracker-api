import { CHART_CONFIG } from "../constants/charts";
import colors from "../constants/colors";

/**
 * 
 * @param {string} chartType - type of chart
 * @param {object} totals - daily totals object
 * @param {object} targets - daily targets object
 */
export function buildTargetChartData(chartType, totals, targets) {
  const config = CHART_CONFIG[chartType];
  const consumed = totals[chartType];
  const remaining = parseInt(targets[chartType]) - parseInt(totals[chartType]);

  return {
    labels: [
      `Consumed ${config.LABEL}`,
      `Remaining ${config.LABEL}`,
    ],
    datasets: [{
      data: [
        consumed, 
        remaining > 0 ? remaining : 0,
      ],
      backgroundColor: [config.BG_COLOR, colors.LIGHT_GRAY],
    }],
  };
}