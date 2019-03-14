import axios from 'axios';
import { FETCH_PRODUCTS } from './types';
import { API_BASE_URL } from '../../settings';
import { SUCCESS, FAILURE } from '../../constants';

export const fetchProducts = (status, payload) => ({
  type: FETCH_PRODUCTS[status],
  payload,
});


export const fetchProductsAPI = (section, type) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_BASE_URL}/products/${section}/${type}`,
      method: 'get',
    });
    dispatch(fetchProducts(SUCCESS, response.data));
  } catch (err) {
    dispatch(fetchProducts(FAILURE, err));
  }
};
