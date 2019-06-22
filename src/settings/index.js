const development = {
  API_BASE_URL: 'http://localhost:8000',
};

const production = {
  API_BASE_URL: 'http://onlineshoppingstoreapi-env.i8fh3ettqw.ca-central-1.elasticbeanstalk.com',
};

module.exports = process.env.NODE_ENV === 'production' ? production : development;
