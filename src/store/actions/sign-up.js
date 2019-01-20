import axios from 'axios';
import { SIGNUP } from './types';

export const signUp = user => ({
  type: SIGNUP,
  user,
});

export const signUpAPI = user => dispatch => axios({
  url: 'http://localhost:8000/api/sign-up',
  method: 'post',
  data: user,
})
  .then((response) => {
    dispatch(signUp(response.data));
  })
  .catch((error) => {
    throw (error);
  });
