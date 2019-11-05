import { LOGIN } from '../actions/types';
import { getInitialState } from '../../utils';

const login = (state = getInitialState(), action) => {
  switch (action.type) {
    case LOGIN.SUCCESS:
      localStorage.setItem('OS_AUTH_TOKEN', action.payload.data);
      return action.payload;
    case LOGIN.PENDING:
    case LOGIN.FAILURE:
      return action.payload;
    default:
      return state;
  }
};

export default login;
