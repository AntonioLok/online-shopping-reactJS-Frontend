import React from 'react';
import PropTypes from 'prop-types';
import RenderNavHeaders from './render-nav-headers';
import { SECTIONS } from '../../../constants/index';

const NavHeader = (props) => {
  const { history } = props;

  return (
    <div className="os--nav-header">
      {SECTIONS.map(
        section => <RenderNavHeaders section={section} key={section} history={history} />,
      )}
    </div>
  );
};

NavHeader.propTypes = {
  history: PropTypes.object.isRequired,
};

export default NavHeader;
