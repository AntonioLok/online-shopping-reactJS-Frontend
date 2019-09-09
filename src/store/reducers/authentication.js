import { VALIDATE_TOKEN } from '../actions/types';
import { getInitialState } from '../../utils';

const authentication = (state = getInitialState(), action) => {
  switch (action.type) {
    case VALIDATE_TOKEN.SUCCESS:
      return action.payload;
    case VALIDATE_TOKEN.FAILURE:
      localStorage.removeItem('OS_AUTH_TOKEN');
      return action.payload;
    default:
      return state;
  }
};

export default authentication;
