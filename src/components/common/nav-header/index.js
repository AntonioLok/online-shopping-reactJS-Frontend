import React from 'react';
import { Link } from 'react-router-dom';
import HEADERS from '../../../constants/index';

const renderNavHeaders = navHeader => (
  <Link to={`./${navHeader}`} key={navHeader}>
    {navHeader}
  </Link>
);

const NavHeader = () => (
  <div className="nav-header">
    {HEADERS.map(navHeader => renderNavHeaders(navHeader))}
  </div>
);

export default NavHeader;
