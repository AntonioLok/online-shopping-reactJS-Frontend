import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Button from './button';
import TextInput from './input-fields/text-input';
import SelectInput from './input-fields/select-input';

class CustomForm extends PureComponent {
  render() {
    const {
      title, handleSubmit, submitButtonProps, inputFields,
    } = this.props;

    const emailTextInput = (
      <TextInput
        name="email"
        validate={['required', 'email']}
        type="text"
        label="Email"
      />
    );

    const passwordTextInput = (
      <TextInput
        name="password"
        validate={['required', 'minPasswordLength']}
        type="password"
        label="Password"
      />
    );

    const inputFieldArray = inputFields.map((field) => {
      if (field.textInput) {
        if (field.textInput.name === 'email') {
          return emailTextInput;
        }
        if (field.textInput.name === 'password') {
          return passwordTextInput;
        }
        // Custom field input
        return <TextInput {...field.textInput} />;
      }
      return <SelectInput {...field.selectInput} />;
    });

    return (
      <form onSubmit={handleSubmit}>
        {title && <div className="title">{title}</div> }
        {inputFieldArray}
        <Button caption="Submit" type="submit" {...submitButtonProps} />
      </form>
    );
  }
}

CustomForm.propTypes = {
  title: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  submitButtonCaption: PropTypes.string,
  inputFields: PropTypes.array,
  asyncValidate: PropTypes.func.isRequired,
  asyncBlurFields: PropTypes.array,
};

export default compose(
  connect((state, props) => ({
    form: props.form,
    asyncValidate: props.asyncValidate,
    asyncBlurFields: props.asyncBlurFields,
  })),
  reduxForm(),
)(CustomForm);
