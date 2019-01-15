/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import SelectInput from '../common/form/select-input';

class AddToCartForm extends React.Component {
  render() {
    const { product, handleSubmit } = this.props;
    const { sizeAvailable } = product;
    return (
      <form onSubmit={handleSubmit}>
        <SelectInput
          name="selectSize"
          options={sizeAvailable}
          validate={['isRequired']}
        />
        <Button type="submit">
          <i className="material-icons">shopping_basket</i>
          <span className="btn-caption">Add</span>
        </Button>
      </form>
    );
  }
}

AddToCartForm.propTypes = {
  product: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({ form: 'AddToCartForm' })(AddToCartForm);
