const asyncActionType = type => ({
  SUCCESS: `${type}_SUCCESS`,
  PENDING: `${type}_PENDING`,
  FAILURE: `${type}_FAILURE`,
});

export const API_REQUEST = 'API_REQUEST';

export const FETCH_PRODUCTS = asyncActionType('FETCH_PRODUCTS');

export const FETCH_PRODUCT = asyncActionType('FETCH_PRODUCT');

export const FETCH_CART = asyncActionType('FETCH_CART');

export const UPDATE_CART = asyncActionType('UPDATE_CART');

export const REGISTER = asyncActionType('REGISTER');

export const LOGIN = asyncActionType('LOGIN');
