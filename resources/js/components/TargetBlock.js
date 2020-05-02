import React, { Component } from 'react';
import PropTypes from 'prop-types';
import colors from '../constants/colors';

class TargetBlock extends Component {
  getFillStyles() {
    const { consumed, target } = this.props;
    const styles = {};
    const consumedPercentage = (consumed / target) * 100;

    styles.height = `${consumedPercentage}%`;

    if (consumedPercentage > 100) {
      styles.backgroundColor = colors.DANGER;
    }

    return styles;
  }

  render() {
    const { consumed, target } = this.props;
    const fillStyles = this.getFillStyles();

    return (
      <div className="target-block">
        <div className="fill" style={fillStyles}></div>
        <div className="content">
          <p>
            {consumed}
            <span>of {target}</span>
          </p>
        </div>
      </div>
    )
  }
}

TargetBlock.propTypes = {
  consumed: PropTypes.number.isRequired,
  target: PropTypes.number.isRequired,
};

export default TargetBlock;
