import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import asyncValidate from '../../../utils/email-exists';
import Button from '../../common/form/button';
import TextInput from '../../common/form/input-fields/text-input';

class RegisterForm extends PureComponent {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <TextInput
          name="email"
          validate={['required', 'email']}
          type="text"
          label="Email"
        />
        <TextInput
          name="password"
          validate={['required', 'minPasswordLength']}
          type="password"
          label="Password"
        />
        <Button caption="Submit" type="submit" />
      </form>
    );
  }
}

RegisterForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'RegisterForm',
  asyncValidate,
  asyncBlurFields: ['email'],
})(RegisterForm);
