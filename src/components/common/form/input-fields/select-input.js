import React from 'react';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';
import validations from '../validations';

const renderField = (fields) => {
  const {
    meta: { submitFailed, error },
    placeholder,
    input,
    options,
  } = fields;
  const { name } = input;
  return (
    <div className={`form-field wrapper-field-${name}`}>
      <select {...input}>
        <option defaultValue key="default" value="default">{placeholder}</option>
        {options.map(size => <option value={size} key={size}>{size}</option>)}
      </select>
      {submitFailed && error && <div className="text-danger">{error}</div>}
    </div>
  );
};

class SelectInput extends React.PureComponent {
  render() {
    const {
      name,
      placeholder,
      validate,
      options,
    } = this.props;
    const getValidations = () => validate.map(o => validations[o]);
    return (
      <Field
        name={name}
        placeholder={placeholder}
        component={renderField}
        options={options}
        validate={getValidations()}
      />
    );
  }
}

SelectInput.defaultProps = {
  placeholder: 'Please select a value',
};

SelectInput.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  validate: PropTypes.array.isRequired,
  options: PropTypes.array.isRequired,
};


export default SelectInput;
