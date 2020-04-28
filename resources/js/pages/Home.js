import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withUserAuthentication } from '../components/withUserAuthentication.hoc';
import { getActiveUser } from '../state/selectors/user.selectors';
import { loadTodaysFood } from '../state/actions/food.actions';
import DailyTargets from '../components/DailyTargets';

class Home extends Component {
  componentDidMount() {
    const { loadTodaysFood } = this.props;

    loadTodaysFood();
  }

  render() {
    const { user, todaysFood } = this.props;

    return (
      <div className="home-page">
        <DailyTargets
          food={todaysFood}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: getActiveUser(state),
  todaysFood: state?.food?.todaysFood,
});

const mapDispatchToProps = {
  loadTodaysFood,
};

export default withUserAuthentication(connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home));
