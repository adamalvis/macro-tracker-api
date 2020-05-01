import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Doughnut } from 'react-chartjs-2';
import { getMacroTotals } from '../utilities/food.utility';
import { CHARTS } from '../constants/charts';
import { buildTargetChartData } from '../utilities/charts.utility';

class DailyTargets extends Component {
  render() {
    const { food, targets } = this.props;
    const totals = getMacroTotals(food);

    return (
      <div>
        <Doughnut
          data={buildTargetChartData(CHARTS.CALORIES, totals, targets)}
        />
        <Doughnut
          data={buildTargetChartData(CHARTS.PROTEIN, totals, targets)}
        />
        <Doughnut
          data={buildTargetChartData(CHARTS.FAT, totals, targets)}
        />
        <Doughnut
          data={buildTargetChartData(CHARTS.CARBOHYDRATES, totals, targets)}
        />
      </div>
    )
  }
}

const targetShape = PropTypes.shape({
  calories: PropTypes.number,
  protein: PropTypes.number,
  fat: PropTypes.number,
  carbohydrates: PropTypes.number,
});

DailyTargets.propTypes = {
  food: PropTypes.arrayOf(targetShape),
  targets: targetShape,
};

DailyTargets.defaultProps = {
  food: [],
};

export default DailyTargets;
