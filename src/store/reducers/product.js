import { FETCH_PRODUCT } from '../actions/types';

const product = (state = {}, action) => {
  switch (action.type) {
    case FETCH_PRODUCT:
      return action.product;
    default:
      return state;
  }
};

export default product;
