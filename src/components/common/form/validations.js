const required = value => (!value || value === 'default' ? 'This field is required' : undefined);

const email = value => (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
  ? 'Invalid email address' : undefined);

const minPasswordLength = value => (value.length < 8 ? 'Must be at least 8 characters' : undefined);

export default {
  required,
  email,
  minPasswordLength,
};
