/* eslint-disable consistent-return */
import axios from 'axios';
import API_BASE_URL from '../../settings/index';

const apiRequestMiddleware = store => next => async (action) => {
  const { dispatch } = store;
  // i.e. redux form actions
  if (action.type !== 'API_REQUEST') {
    return next(action);
  }

  const {
    SUCCESS, FAILURE, endpoint, method, data,
  } = action.payload;
  const url = `${API_BASE_URL}/${endpoint}`;

  try {
    const response = await axios({
      url,
      method,
      data,
    });
    dispatch({ type: SUCCESS, payload: response.data });
  } catch (err) {
    dispatch({ type: FAILURE, payload: err.response.data });
  }
};

export default apiRequestMiddleware;
