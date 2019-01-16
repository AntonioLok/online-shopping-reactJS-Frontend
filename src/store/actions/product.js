import axios from 'axios';
import { FETCH_PRODUCT } from './types';

export const fetchProduct = product => ({
  type: FETCH_PRODUCT,
  product,
});

export const fetchProductAPI = id => dispatch => axios({
  url: `http://localhost:8000/api/products/${id}`,
  method: 'get',
})
  .then((response) => {
    dispatch(fetchProduct(response.data.data));
  })
  .catch((error) => {
    throw (error);
  });
