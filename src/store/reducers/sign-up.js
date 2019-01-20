import { SIGNUP } from '../actions/types';

const signUp = (state = {}, action) => {
  switch (action.type) {
    case SIGNUP:
      return action.user;
    default:
      return state;
  }
};

export default signUp;
