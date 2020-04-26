import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withUserAuthentication } from '../components/withUserAuthentication.hoc';
import { getActiveUser } from '../state/selectors/user.selectors';
import { loadTodaysFood } from '../state/actions/food.actions';

class Home extends Component {
  componentDidMount() {
    const { loadTodaysFood } = this.props;

    loadTodaysFood();
  }

  render() {
    const { user } = this.props;

    return (
      <div>Welcome {user.name}</div>
    );
  }
}

const mapStateToProps = state => ({
  user: getActiveUser(state),
});

const mapDispatchToProps = {
  loadTodaysFood,
};

export default withUserAuthentication(connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home));
