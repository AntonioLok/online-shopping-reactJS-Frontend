/* eslint-disable react/button-has-type */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Button extends PureComponent {
  render() {
    const {
      icon,
      type,
      caption,
    } = this.props;
    return (
      <button type={type}>
        {icon && <i className="material-icons">{icon}</i>}
        <span className="btn-caption">{caption}</span>
      </button>
    );
  }
}

Button.defaultProps = {
  icon: null,
};

Button.propTypes = {
  type: PropTypes.oneOf(['submit', 'reset', 'button']).isRequired,
  icon: PropTypes.string,
  caption: PropTypes.string.isRequired,
};
export default Button;
