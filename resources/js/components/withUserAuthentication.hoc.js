import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserToken } from '../state/selectors/user.selectors';
import Login from '../pages/Login';

export function withUserAuthentication(WrappedComponent) {
  class Wrapper extends Component {
    render() {
      const { token } = this.props;
      console.log({ token })
      const RenderedComponent = !!token ? WrappedComponent : Login;

      return <RenderedComponent {...this.props} />
    }
  }

  const mapStateToProps = state => ({
    token: getUserToken(state),
  });

  return connect(mapStateToProps)(Wrapper);
}
