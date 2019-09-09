import React, { PureComponent } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ROUTES } from '../../../constants';

class NavMenu extends PureComponent {
  // eslint-disable-next-line class-methods-use-this
  logOut() {
    localStorage.removeItem('OS_AUTH_TOKEN');
  }

  render() {
    const {
      home, register, login,
    } = ROUTES;
    const { isTokenValidated, isAuthenticated } = this.props;

    const loginItems = (
      <Nav pullRight>
        <NavItem href={register}>Register</NavItem>
        <NavItem href={login}>Login</NavItem>
      </Nav>
    );
    const logoutItems = (
      <Nav pullRight>
        <NavItem href={home} onClick={() => this.logOut()}>Log out</NavItem>
      </Nav>
    );

    let displayElem = null;

    if (isTokenValidated) {
      displayElem = (
        <div className="os--nav-menu">
          <Navbar inverse>
            <Navbar.Header>
              <Navbar.Brand>
                <Link to={home}>Home</Link>
              </Navbar.Brand>
            </Navbar.Header>
            {!isAuthenticated ? loginItems : logoutItems}
          </Navbar>
        </div>
      );
    }

    return displayElem;
  }
}

NavMenu.propTypes = {
  isTokenValidated: PropTypes.bool.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

export default NavMenu;
