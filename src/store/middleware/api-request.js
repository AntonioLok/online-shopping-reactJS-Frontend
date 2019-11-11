/* eslint-disable consistent-return */
import axios from 'axios';
import tokenUtils from '../../utils/auth/token';
import API_BASE_URL from '../../settings/index';
import { getInitialState } from '../../utils';

const apiRequestMiddleware = store => next => async (action) => {
  const { dispatch } = store;
  // i.e. redux form actions
  if (action.type !== 'API_REQUEST') {
    return next(action);
  }

  const {
    SUCCESS, FAILURE, PENDING, endpoint, method, data, isCollection, authorization = false,
  } = action.payload;
  const url = `${API_BASE_URL}/${endpoint}`;

  try {
    let response;
    const axiosRequestArguments = {
      url,
      method,
      data,
    };
    const initialState = getInitialState(isCollection);

    dispatch({ type: PENDING, payload: { ...initialState, isPending: true } });

    if (authorization) {
      const token = tokenUtils.get();

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

    dispatch({ type: SUCCESS, payload: { ...response.data, isPending: false } });
  } catch (err) {
    dispatch({ type: FAILURE, payload: { ...err.response.data, isPending: false } });
  }
};

export default apiRequestMiddleware;
