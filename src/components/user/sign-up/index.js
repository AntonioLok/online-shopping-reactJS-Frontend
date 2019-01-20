import React from 'react';
import {
  Grid, Row, Col, Alert,
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signUpAPI } from '../../../store/actions/sign-up';
import SignUpForm from './sign-up-form';

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(fields) {
    const { signUp } = this.props;
    signUp(fields);
  }

  renderFormError() {
    const { signUpUser } = this.props;
    const { success, errorCode } = signUpUser;

    let message;
    if (!success) {
      switch (errorCode) {
        case 400:
          message = 'One or more fields appears to be invalid. Please check the form and try again.';
          break;
        default:
          message = 'An unknown error has occurred. Please try again.';
          break;
      }
    }
    return <Alert bsStyle="danger">{message}</Alert>;
  }

  render() {
    const { signUpUser } = this.props;
    const { success } = signUpUser;

    if (success) {
      return <Redirect to="./login" />;
    }

    return (
      <div className="sign-up">
        <Grid>
          <Row>
            <Col xs={10} xsOffset={1} sm={10} smOffset={1} md={6} mdOffset={3}>
              {success === false ? this.renderFormError() : null}
              <SignUpForm onSubmit={this.handleSubmit} />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  signUpUser: state.signUp,
});

const mapDispatchToProps = dispatch => ({
  signUp: (user) => {
    dispatch(signUpAPI(user));
  },
});

SignUp.propTypes = {
  signUp: PropTypes.func.isRequired,
  signUpUser: PropTypes.object.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignUp);
