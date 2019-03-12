import axios from 'axios';
import { FETCH_PRODUCT } from './types';
import { API_BASE_URL } from '../../settings';
import { SUCCESS, FAILURE } from '../../constants';

export const fetchProduct = (status, payload) => ({
  type: FETCH_PRODUCT[status],
  payload,
});

export const fetchProductAPI = id => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_BASE_URL}/products/${id}`,
      method: 'get',
    });
    dispatch(fetchProduct(SUCCESS, response.data));
  } catch (err) {
    dispatch(fetchProduct(FAILURE, err));
  }
};
