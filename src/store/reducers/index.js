import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import products from './products';
import product from './product';

const rootReducer = combineReducers({
  products,
  product,
  form,
});

export default rootReducer;
