import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Navbar, Button } from 'react-bulma-components';
import { getMenuIsOpen } from '../state/selectors/navigation.selectors';
import { togglePrimaryMenu } from '../state/actions/navigation.actions';
import { getIsLoggedIn } from '../state/selectors/user.selectors';

class PrimaryNav extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.togglePrimaryMenu();
  }

  render() {
    const { menuIsOpen, isLoggedIn } = this.props;
    const iconName = menuIsOpen ? 'fa-times' : 'fa-bars';

    return (
      <Navbar color="dark" className="primary-nav">
        <Navbar.Brand>
          <p className="is-size-4">MacroTracker</p>
        </Navbar.Brand>
        {isLoggedIn && (
          <Button
            color="primary"
            className="primary-nav-button"
            onClick={this.handleClick}
          >
            <i className={`fa ${iconName}`} aria-hidden="true"></i>
          </Button>
        )}
      </Navbar>
    );
  }
}

PrimaryNav.defaultProps = {
  menuIsOpen: false,
};

PrimaryNav.propTypes = {
  togglePrimaryMenu: PropTypes.func.isRequired,
  menuIsOpen: PropTypes.bool,
};

const mapStateToProps = state => ({
  menuIsOpen: getMenuIsOpen(state),
  isLoggedIn: getIsLoggedIn(state),
});

const mapDispatchToProps = {
  togglePrimaryMenu,
};

export default connect(mapStateToProps, mapDispatchToProps)(PrimaryNav);
