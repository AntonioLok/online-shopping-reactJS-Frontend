import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import asyncValidate from '../../../utils/email-exists';
import CustomForm from '../../common/form';

class RegisterForm extends PureComponent {
  render() {
    return (
      <CustomForm {...this.props} />
    );
  }
}


RegisterForm.propTypes = {
  title: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  submitButtonProps: PropTypes.array,
};

export default reduxForm({
  form: 'RegisterForm',
  asyncValidate,
  asyncBlurFields: ['email'],
})(RegisterForm);
