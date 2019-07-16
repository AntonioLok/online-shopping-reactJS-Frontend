import { LOGIN } from '../actions/types';
import { getInitialState } from '../../utils';

const login = (state = getInitialState(), action) => {
  switch (action.type) {
    case LOGIN.SUCCESS:
    case LOGIN.FAILURE:
      return action.payload;
    default:
      return state;
  }
};

export default login;
