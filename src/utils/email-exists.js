import axios from 'axios';
import API_BASE_URL from '../settings';

const messageError = { email: 'That username is taken' };
const asyncValidate = async (value) => {
  const response = await axios({
    url: `${API_BASE_URL}/users/${value.email}`,
    method: 'get',
  });

  if (response.data.data.emailFound) {
    throw messageError;
  }
};

export default asyncValidate;
