/* eslint-disable react/button-has-type */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Button extends PureComponent {
  render() {
    const {
      icon,
      type,
      caption,
      ...props
    } = this.props;
    return (
      <button type={type} {...props}>
        {icon && <i className="material-icons">{icon}</i>}
        <span className="btn-caption">{caption}</span>
      </button>
    );
  }
}

Button.propTypes = {
  type: PropTypes.oneOf(['submit', 'reset', 'button']).isRequired,
  icon: PropTypes.string,
  caption: PropTypes.string.isRequired,
};
export default Button;
