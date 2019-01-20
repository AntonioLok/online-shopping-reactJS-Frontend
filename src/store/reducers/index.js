import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import products from './products';
import product from './product';
import signUp from './sign-up';

const rootReducer = combineReducers({
  products,
  product,
  form,
  signUp,
});

export default rootReducer;
