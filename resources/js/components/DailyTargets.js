import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getMacroTotals } from '../utilities/food.utility';

class DailyTargets extends Component {
  render() {
    const { food, targets } = this.props;
    const totals = getMacroTotals(food);

    return (
      <div className="daily-targets">
        <h2 class="is-size-2" style={{ marginBottom: '10px' }}>Daily Report</h2>
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
