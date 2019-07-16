import React, { Component } from 'react';
import {
  Grid, Row, Col, Alert,
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { loginAPI } from '../../../store/actions/login';
import { ROUTES } from '../../../constants';
import LoginForm from './login-form';

class Login extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(fields) {
    const { login } = this.props;
    login(fields);
  }

  renderFormError() {
    const { loginState } = this.props;
    const { message } = loginState;

    return message ? <Alert bsStyle="danger">{message}</Alert> : null;
  }

  render() {
    const { loginState } = this.props;
    const { statusCode, data } = loginState;
    const { home } = ROUTES;
    const isLoginSuccessful = statusCode === 200;
    const loginFormProps = {
      title: 'Login',
      onSubmit: this.handleSubmit,
      inputFields: [
        { textInput: { name: 'email' } },
        { textInput: { name: 'password' } },
      ],
    };

    if (isLoginSuccessful) {
      localStorage.setItem('token', data);
      return <Redirect to={home} />;
    }

    return (
      <div className="os--login">
        <Grid>
          <Row>
            <Col xs={10} xsOffset={1} sm={10} smOffset={1} md={6} mdOffset={3}>
              {!isLoginSuccessful && this.renderFormError()}
              <LoginForm {...loginFormProps} />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loginState: state.login,
});

const mapDispatchToProps = dispatch => ({
  login: (user) => {
    dispatch(loginAPI(user));
  },
});

Login.propTypes = {
  login: PropTypes.func.isRequired,
  loginState: PropTypes.object.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
