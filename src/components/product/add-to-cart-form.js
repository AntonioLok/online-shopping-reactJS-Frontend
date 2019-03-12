import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import Button from '../common/form/button';
import SelectInput from '../common/form/input-fields/select-input';

class AddToCartForm extends PureComponent {
  render() {
    const { product, handleSubmit } = this.props;
    const { sizeAvailable } = product;
    return (
      <form onSubmit={handleSubmit}>
        <SelectInput
          name="selectSize"
          options={sizeAvailable}
          validate={['required']}
          placeholder="Please select a size"
        />
        <Button icon="shopping_basket" caption="Add product" type="submit" />
      </form>
    );
  }
}

AddToCartForm.propTypes = {
  product: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({ form: 'AddToCartForm' })(AddToCartForm);
