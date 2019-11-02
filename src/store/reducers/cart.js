import { FETCH_CART, UPDATE_CART } from '../actions/types';
import { getInitialState } from '../../utils';

const cart = (state = getInitialState(true), action) => {
  switch (action.type) {
    case FETCH_CART.SUCCESS:
    case FETCH_CART.FAILURE:
    case UPDATE_CART.SUCCESS:
    case UPDATE_CART.FAILURE:
      return action.payload;
    default:
      return state;
  }
};

export default cart;
