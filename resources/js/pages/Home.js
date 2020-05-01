import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withUserAuthentication } from '../components/withUserAuthentication.hoc';
import { getActiveUser } from '../state/selectors/user.selectors';
import { loadTodaysFood } from '../state/actions/food.actions';
import DailyTargets from '../components/DailyTargets';
import { loadTargets } from '../state/actions/targets.actions';
import { Button } from 'react-bulma-components';

class Home extends Component {
  componentDidMount() {
    const { loadTodaysFood, loadTargets } = this.props;

    loadTodaysFood();
    loadTargets();
  }

  render() {
    const { todaysFood, targets } = this.props;

    // if (!targets.isUpdated) {
    //   return (
    //     <div>
    //       <p>It looks like you haven't updated your macro targets yet. Please click below to set your daily targets.</p>
    //       <Button style={{ marginTop: '10px' }} color="primary">Update Targets</Button>
    //     </div>
    //   );
    // }

    return (
      <div className="home-page">
        <DailyTargets
          targets={targets}
          food={todaysFood}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: getActiveUser(state),
  todaysFood: state?.food?.todaysFood,
  targets: state?.targets,
});

const mapDispatchToProps = {
  loadTodaysFood,
  loadTargets,
};

export default withUserAuthentication(connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home));
