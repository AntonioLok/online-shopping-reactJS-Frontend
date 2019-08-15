import axios from 'axios';
import { REGISTER } from './types';
import { API_BASE_URL } from '../../settings';
import { SUCCESS, FAILURE } from '../../constants';

export const register = (status, payload) => ({
  type: REGISTER[status],
  payload,
});

export const registerAPI = user => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_BASE_URL}/users/register`,
      method: 'post',
      data: user,
    });
    dispatch(register(SUCCESS, response.data));
  } catch (err) {
    dispatch(register(FAILURE, err.response.data));
  }
};
