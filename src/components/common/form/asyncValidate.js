import axios from 'axios';

const messageError = { email: 'That username is taken' };
const emailExists = value => axios({
  url: `http://localhost:8000/api/emails/${value.email}`,
  method: 'get',
})
  .then((response) => {
    if (response.data.emailFound) {
      throw messageError;
    }
  })
  .catch((error) => {
    throw (error);
  });

export default emailExists;
