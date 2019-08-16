import { REGISTER, API_REQUEST } from './types';

const register = data => ({
  type: API_REQUEST,
  payload: {
    ...REGISTER,
    endpoint: 'users/register',
    method: 'POST',
    data,
  },
});

export default register;
