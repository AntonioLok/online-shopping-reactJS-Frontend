import React, { PureComponent } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ROUTES } from '../../../constants';
import tokenUtils from '../../../utils/auth/token';

class NavMenu extends PureComponent {
  render() {
    const {
      home, register, login, cart,
    } = ROUTES;
    const { isAuthenticated, cartProducts } = this.props;

    const loginItems = (
      <Nav pullRight>
        <NavItem href={register}>Register</NavItem>
        <NavItem href={login}>Login</NavItem>
        <NavItem href={cart}>Shopping Bag ({cartProducts.length})</NavItem>
      </Nav>
    );
    const logoutItems = (
      <Nav pullRight>
        <NavItem href={home} onClick={() => tokenUtils.remove()}>Log out</NavItem>
        <NavItem href={cart}>Shopping Bag ({cartProducts.length})</NavItem>
      </Nav>
    );

    return (
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
}

NavMenu.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  cartProducts: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string,
    quantity: PropTypes.number,
    size: PropTypes.string,
    img: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
  })),
};

export default NavMenu;
