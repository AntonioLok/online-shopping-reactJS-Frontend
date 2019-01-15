import React from 'react';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';
import validations from './validations';

const renderField = (fields) => {
  const {
    options,
    meta,
    placeholder,
    input,
  } = fields;
  const { error } = meta;
  return (
    <div className={input.name}>
      <select {...input}>
        <option key="default" defaultValue value="">{placeholder}</option>
        {options.map(size => <option value={size} key={size}>{size}</option>)}
      </select>
      {error && <div className="text-danger">{error}</div>}
    </div>
  );
};

// eslint-disable-next-line react/prefer-stateless-function
class SelectInput extends React.Component {
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
