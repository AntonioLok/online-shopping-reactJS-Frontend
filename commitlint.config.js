const config = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'subject-case': [0, 'always', 'upper-case'],
  },
};

module.exports = config;
