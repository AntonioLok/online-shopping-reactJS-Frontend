const development = {
  API_BASE_URL: 'http://localhost:8000',
};

const production = {
  API_BASE_URL: 'https://api.shopping-site.antoniolok.com',
};

module.exports = process.env.NODE_ENV === 'production' ? production.API_BASE_URL : development.API_BASE_URL;
