import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavMenu = () => (
  <div className="nav-menu">
    <Navbar inverse>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/home">Home</Link>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav pullRight>
        <NavItem href="/sign-up">Sign Up</NavItem>
        <NavItem href="/login">Login</NavItem>
      </Nav>
    </Navbar>
  </div>
);

export default NavMenu;
