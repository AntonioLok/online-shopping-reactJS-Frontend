import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import CustomForm from '../common/form';

class AddToCartForm extends PureComponent {
  render() {
    return (
      <CustomForm {...this.props} />
    );
  }
}

AddToCartForm.propTypes = {
  inputFields: PropTypes.array,
  handleSubmit: PropTypes.func.isRequired,
  submitButtonProps: PropTypes.shape({
    icon: PropTypes.string,
    caption: PropTypes.string.isRequired,
  }),
};

export default reduxForm({ form: 'AddToCartForm' })(AddToCartForm);
