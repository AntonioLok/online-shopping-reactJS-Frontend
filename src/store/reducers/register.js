import { REGISTER } from '../actions/types';
import { getInitialState } from '../../utils';

const register = (state = getInitialState(), action) => {
  switch (action.type) {
    case REGISTER.SUCCESS:
    case REGISTER.FAILURE:
      return action.payload;
    default:
      return state;
  }
};

export default register;
