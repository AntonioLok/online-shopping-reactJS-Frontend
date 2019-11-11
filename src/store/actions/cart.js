import { FETCH_CART, UPDATE_CART, API_REQUEST } from './types';

const fetchCart = () => ({
  type: API_REQUEST,
  payload: {
    ...FETCH_CART,
    endpoint: 'carts',
    method: 'GET',
    authorization: true,
    isCollection: true,
  },
});

const updateCart = updatedProducts => ({
  type: API_REQUEST,
  payload: {
    ...UPDATE_CART,
    endpoint: 'carts',
    method: 'POST',
    data: { updatedProducts },
    authorization: true,
    isCollection: true,
  },
});

export {
  fetchCart,
  updateCart,
};
