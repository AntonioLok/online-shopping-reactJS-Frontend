import React, { PureComponent } from 'react';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';
import validations from '../validations';

const renderField = (fields) => {
  const {
    meta: { submitFailed, error },
    placeholder,
    type,
    input,
    label,
  } = fields;
  const inputProps = Object.assign({}, { placeholder, type }, input);
  const { name } = input;
  return (
    <div className={`form-field wrapper-field-${name}`}>
      {label && <div className={`label-${name}`}>{label}</div>}
      <input {...inputProps} />
      {submitFailed && error && <div className="text-danger">{error}</div>}
    </div>
  );
};

class TextInput extends PureComponent {
  render() {
    const {
      name,
      label,
      placeholder,
      validate,
      type,
    } = this.props;

    const getValidations = () => validate.map(o => validations[o]);
    return (
      <Field
        name={name}
        placeholder={placeholder}
        component={renderField}
        validate={getValidations()}
        type={type}
        label={label}
      />
    );
  }
}

TextInput.defaultProps = {
  placeholder: '',
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  validate: PropTypes.array.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};


export default TextInput;
