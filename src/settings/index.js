const development = {
  API_BASE_URL: 'http://localhost:8000',
};

const production = {
  API_BASE_URL: 'http://localhost:8000',
};

module.exports = process.env.NODE_ENV === 'production' ? production : development;
