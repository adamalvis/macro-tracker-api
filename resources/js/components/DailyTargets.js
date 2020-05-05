import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getMacroTotals } from '../utilities/food.utility';
import TargetBlock from './TargetBlock';

class DailyTargets extends Component {
  render() {
    const { food, targets } = this.props;
    const totals = getMacroTotals(food);

    return (
      <div className="daily-targets">
        <h2 className="is-size-2" style={{ marginBottom: '10px' }}>Daily Report</h2>
        <div className="columns is-mobile">
          <div className="column">
            <TargetBlock consumed={totals.calories} target={targets.calories} title="Calories" />
          </div>
          <div className="column">
            <TargetBlock consumed={totals.protein} target={targets.protein} title="Protein" />
          </div>
        </div>
        <div className="columns is-mobile">
          <div className="column">
            <TargetBlock consumed={totals.fat} target={targets.fat} title="Fat" />
          </div>
          <div className="column">
            <TargetBlock consumed={totals.carbohydrates} target={targets.carbohydrates} title="Carbohydrates" />
          </div>
        </div>
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
