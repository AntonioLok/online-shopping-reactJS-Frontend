import { ERROR } from './types';

const handleError = error => ({
  type: ERROR,
  payload: error,
});

export default handleError;
