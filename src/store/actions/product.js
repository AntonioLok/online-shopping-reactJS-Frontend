import { FETCH_PRODUCT, API_REQUEST } from './types';

const fetchProduct = id => ({
  type: API_REQUEST,
  payload: {
    ...FETCH_PRODUCT,
    endpoint: `products/${id}`,
    method: 'GET',
  },
});

export default fetchProduct;
