import { FETCH_PRODUCTS } from '../actions/types';
import { getInitialState } from '../../utils';

const products = (state = getInitialState(true), action) => {
  switch (action.type) {
    case FETCH_PRODUCTS.SUCCESS:
    case FETCH_PRODUCTS.FAILURE:
      return action.payload;
    default:
      return state;
  }
};

export default products;
