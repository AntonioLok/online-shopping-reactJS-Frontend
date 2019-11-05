import { FETCH_PRODUCTS, API_REQUEST } from './types';

const fetchProducts = (section, type) => ({
  type: API_REQUEST,
  payload: {
    ...FETCH_PRODUCTS,
    endpoint: `products/${section}/${type}`,
    method: 'GET',
    isCollection: true,
  },
});

export default fetchProducts;
