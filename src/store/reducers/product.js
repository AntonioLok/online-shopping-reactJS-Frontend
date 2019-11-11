import { FETCH_PRODUCT } from '../actions/types';
import { getInitialState } from '../../utils';

const product = (state = getInitialState(), action) => {
  switch (action.type) {
    case FETCH_PRODUCT.SUCCESS:
    case FETCH_PRODUCT.PENDING:
    case FETCH_PRODUCT.FAILURE:
      return action.payload;
    default:
      return state;
  }
};

export default product;
