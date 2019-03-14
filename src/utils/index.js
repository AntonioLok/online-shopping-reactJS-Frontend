// eslint-disable-next-line import/prefer-default-export
export const getInitialState = (isCollection = false) => {
  const data = isCollection ? [] : {};
  return { data };
};
