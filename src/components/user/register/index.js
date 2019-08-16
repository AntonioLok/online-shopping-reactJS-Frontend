import React, { Component } from 'react';
import {
  Grid, Row, Col, Alert,
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import register from '../../../store/actions/register';
import { ROUTES, FORM_STATUS_RESPONSE_MESSAGE } from '../../../constants';
import CustomForm from '../../common/form';
import asyncValidate from '../../../utils/email-exists';

class Register extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(fields) {
    const { dispatchregister } = this.props;
    dispatchregister(fields);
  }

  renderFormError() {
    const { registerState } = this.props;
    const { statusCode } = registerState;

    return statusCode ? <Alert bsStyle="danger">{FORM_STATUS_RESPONSE_MESSAGE[statusCode]}</Alert> : null;
  }

  render() {
    const { registerState } = this.props;
    const { statusCode } = registerState;
    const { login } = ROUTES;

    const isRegisterSuccessful = statusCode === 201;
    const registerFormProps = {
      title: 'Register',
      onSubmit: this.handleSubmit,
      form: 'RegisterForm',
      asyncValidate,
      asyncBlurFields: ['email'],
      inputFields: [
        { textInput: { name: 'email' } },
        { textInput: { name: 'password' } },
      ],
    };

    if (isRegisterSuccessful) {
      return <Redirect to={login} />;
    }

    return (
      <div className="os--register">
        <Grid>
          <Row>
            <Col xs={10} xsOffset={1} sm={10} smOffset={1} md={6} mdOffset={3}>
              {!isRegisterSuccessful && this.renderFormError()}
              <CustomForm {...registerFormProps} />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  registerState: state.register,
});

const mapDispatchToProps = dispatch => ({
  dispatchregister: (user) => {
    dispatch(register(user));
  },
});

Register.propTypes = {
  dispatchregister: PropTypes.func.isRequired,
  registerState: PropTypes.shape({
    statusCode: PropTypes.number,
    statusText: PropTypes.string,
  }).isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Register);
