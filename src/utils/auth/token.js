const get = () => localStorage.getItem('OS_AUTH_TOKEN');

const remove = () => {
  localStorage.removeItem('OS_AUTH_TOKEN');
};

export default {
  get,
  remove,
};
