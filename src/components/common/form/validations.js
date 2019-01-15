const isRequired = (value) => {
  const error = 'You must select a value';
  if (value === '') {
    return error;
  }
  return undefined;
};

export default {
  isRequired,
};
