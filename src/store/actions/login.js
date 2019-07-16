import axios from 'axios';
import { LOGIN } from './types';
import { API_BASE_URL } from '../../settings';
import { SUCCESS, FAILURE } from '../../constants';

export const login = (status, payload) => ({
  type: LOGIN[status],
  payload,
});

export const loginAPI = user => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_BASE_URL}/users/login`,
      method: 'post',
      data: user,
    });
    dispatch(login(SUCCESS, response.data));
  } catch (err) {
    dispatch(login(FAILURE, err.json()));
  }
};
