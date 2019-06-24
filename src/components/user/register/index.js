import React, { Component } from 'react';
import {
  Grid, Row, Col, Alert,
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { registerAPI } from '../../../store/actions/register';
import { ROUTES } from '../../../constants';
import RegisterForm from './register-form';

class Register extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(fields) {
    const { register } = this.props;
    register(fields);
  }

  renderFormError() {
    const { registerState } = this.props;
    const { message } = registerState;

    return message ? <Alert bsStyle="danger">{message}</Alert> : null;
  }

  render() {
    const { registerState } = this.props;
    const { statusCode } = registerState;
    const { logIn } = ROUTES;
    const isRegisterSuccessful = statusCode === 201;
    const registerFormProps = {
      title: 'Register',
      onSubmit: this.handleSubmit,
      inputFields: [
        { textInput: { name: 'email' } },
        { textInput: { name: 'password' } },
      ],
    };

    if (isRegisterSuccessful) {
      return <Redirect to={logIn} />;
    }

    return (
      <div className="os--register">
        <Grid>
          <Row>
            <Col xs={10} xsOffset={1} sm={10} smOffset={1} md={6} mdOffset={3}>
              {isRegisterSuccessful && this.renderFormError()}
              <RegisterForm {...registerFormProps} />
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
  register: (user) => {
    dispatch(registerAPI(user));
  },
});

Register.propTypes = {
  register: PropTypes.func.isRequired,
  registerState: PropTypes.object.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Register);
