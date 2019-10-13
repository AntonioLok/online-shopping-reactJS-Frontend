import jwtDecode from 'jwt-decode';
import tokenUtils from './token';

const getIsAuthenticated = () => {
  const token = tokenUtils.get();

  let isAuthenticated = false;
  if (token) {
    const decoded = jwtDecode(token);
    if (Date.now() < decoded.exp * 1000) {
      isAuthenticated = true;
    } else {
      tokenUtils.remove();
    }
  }

  return isAuthenticated;
};


export default getIsAuthenticated;
