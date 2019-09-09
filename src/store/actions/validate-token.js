import { VALIDATE_TOKEN, API_REQUEST } from './types';

const validateToken = token => ({
  type: API_REQUEST,
  payload: {
    ...VALIDATE_TOKEN,
    endpoint: `users/validate-token/${token}`,
    method: 'GET',
  },
});

export default validateToken;
