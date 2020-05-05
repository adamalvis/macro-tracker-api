import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Notification } from 'react-bulma-components';

class Notifications extends Component {
  render() {
    const { msgs } = this.props;

    return (
      <div className="notification-pane">
        {msgs.length > 0 && msgs.map(msg => (
          <Notification color={msg.color}>
            {msg.text}
          </Notification>
        ))}
      </div>
    )
  }
}

Notifications.propTypes = {
  msgs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    text: PropTypes.string,
    color: PropTypes.string,
  })),
};

Notifications.defaultProps = {
  msgs: [],
};

const mapStateToProps = state => ({
  msgs: state?.notifications?.msgs,
});

export default connect(mapStateToProps)(Notifications);
