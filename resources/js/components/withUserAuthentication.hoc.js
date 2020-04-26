import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserToken } from '../state/selectors/user.selectors';
import Login from '../pages/Login';
import { getAuthToken } from '../utilities/auth.utility';
import { validateToken } from '../state/actions/user.actions';

export function withUserAuthentication(WrappedComponent) {
  class Wrapper extends Component {
    componentDidMount() {
      const { token, validateToken } = this.props;

      if (!token) {
        const storedToken = getAuthToken();

        if (storedToken) {
          validateToken(storedToken);
        }
      }
    }

    render() {
      const { token } = this.props;
      const RenderedComponent = !!token ? WrappedComponent : Login;

      return <RenderedComponent {...this.props} />
    }
  }

  const mapStateToProps = state => ({
    token: getUserToken(state),
  });

  const mapDispatchToProps = {
    validateToken,
  };

  return connect(mapStateToProps, mapDispatchToProps)(Wrapper);
}
