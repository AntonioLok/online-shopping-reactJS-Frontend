import React, { Component } from 'react';
import {
  Grid, Row, Col, Alert,
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import login from '../../../store/actions/login';
import {
  ROUTES, FORM_STATUS_RESPONSE_MESSAGE, FALLBACK_ERROR_MESSAGE_FORM, FIELDS_TYPE,
} from '../../../constants';
import CustomForm from '../../common/form';

class Login extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(fields) {
    const { dispatchLogin } = this.props;
    dispatchLogin(fields);
  }

  renderFormError() {
    const { loginState } = this.props;
    const { statusCode } = loginState;
    const message = FORM_STATUS_RESPONSE_MESSAGE[statusCode]
      ? FORM_STATUS_RESPONSE_MESSAGE[statusCode] : FALLBACK_ERROR_MESSAGE_FORM;

    return statusCode ? <Alert bsStyle="danger">{message}</Alert> : null;
  }

  render() {
    const { TEXT_INPUT } = FIELDS_TYPE;
    const { loginState } = this.props;
    const { statusCode } = loginState;
    const { home } = ROUTES;
    const isLoginSuccessful = statusCode === 200;
    const loginFormProps = {
      title: 'Login',
      onSubmit: this.handleSubmit,
      form: 'LoginForm',
      inputFields: [
        { type: TEXT_INPUT, name: 'email' },
        { type: TEXT_INPUT, name: 'password' },
      ],
    };

    if (isLoginSuccessful) {
      return <Redirect to={home} />;
    }

    return (
      <div className="os--login">
        <Grid>
          <Row>
            <Col xs={10} xsOffset={1} sm={10} smOffset={1} md={6} mdOffset={3}>
              {!isLoginSuccessful && this.renderFormError()}
              <CustomForm {...loginFormProps} />
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
  dispatchLogin: (user) => {
    dispatch(login(user));
  },
});

Login.propTypes = {
  dispatchLogin: PropTypes.func.isRequired,
  loginState: PropTypes.shape({
    statusCode: PropTypes.number,
    message: PropTypes.string,
    statusText: PropTypes.string,
  }).isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
