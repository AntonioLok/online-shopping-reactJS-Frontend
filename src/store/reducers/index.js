import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import products from './products';
import product from './product';
import register from './register';
import login from './login';

const rootReducer = combineReducers({
  products,
  product,
  form,
  register,
  login,
});

export default rootReducer;
