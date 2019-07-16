import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import CustomForm from '../../common/form';

class LoginForm extends PureComponent {
  render() {
    return (
      <CustomForm {...this.props} />
    );
  }
}

LoginForm.propTypes = {
  title: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  submitButtonProps: PropTypes.array,
};

export default reduxForm({
  form: 'LoginForm',
})(LoginForm);
