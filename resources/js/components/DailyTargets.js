import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getMacroTotals } from '../utilities/food.utility';

class DailyTargets extends Component {
  render() {
    const { food } = this.props;
    const totals = getMacroTotals(food);

    console.log(totals);

    return (
      <div>
        Targets
      </div>
    )
  }
}

DailyTargets.propTypes = {
  food: PropTypes.arrayOf(PropTypes.shape({
    calories: PropTypes.number,
    protein: PropTypes.number,
    fat: PropTypes.number,
    carbohydrates: PropTypes.number,
  })),
};

DailyTargets.defaultProps = {
  food: [],
};

export default DailyTargets;
