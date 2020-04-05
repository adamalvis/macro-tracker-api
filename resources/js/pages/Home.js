import React, { Component } from 'react';
import { withUserAuthentication } from '../components/withUserAuthentication.hoc';

class Home extends Component {
  render() {
    return (
      <div>Home</div>
    );
  }
}

export default withUserAuthentication(Home);
