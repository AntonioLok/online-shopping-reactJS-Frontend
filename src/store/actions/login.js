import { LOGIN, API_REQUEST } from './types';

const login = data => ({
  type: API_REQUEST,
  payload: {
    ...LOGIN,
    endpoint: 'users/login',
    method: 'POST',
    data,
  },
});

export default login;
