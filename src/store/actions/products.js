import axios from 'axios';
import { FETCH_PRODUCTS } from './types';

export const fetchProducts = products => ({
  type: FETCH_PRODUCTS,
  products,
});

export const fetchProductsAPI = (section, type) => dispatch => axios({
  url: `http://localhost:8000/api/products/${section}/${type}`,
  method: 'get',
})
  .then((response) => {
    dispatch(fetchProducts(response.data.data));
  })
  .catch((error) => {
    throw (error);
  });
