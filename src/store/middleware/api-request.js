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
    SUCCESS, FAILURE, endpoint, method, data, authorization = false,
  } = action.payload;
  const url = `${API_BASE_URL}/${endpoint}`;

  try {
    let response;
    const axiosRequestArguments = {
      url,
      method,
      data,
    };

    if (authorization) {
      const token = localStorage.getItem('OS_AUTH_TOKEN');
      response = await axios({
        ...axiosRequestArguments,
        headers: {
          Authorization: token,
          'Content-Type': 'application/json',
        },
      });
    } else {
      response = await axios({ ...axiosRequestArguments });
    }
    dispatch({ type: SUCCESS, payload: response.data });
  } catch (err) {
    dispatch({ type: FAILURE, payload: err.response.data });
  }
};

export default apiRequestMiddleware;
