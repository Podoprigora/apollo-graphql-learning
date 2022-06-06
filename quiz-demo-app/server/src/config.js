const path = require('path');
const dotenv = require('dotenv');

dotenv.config({
  path: path.resolve(__dirname, './.env'),
});

const config = Object.freeze({
  port: process.env.PORT || 5020,
  apiBaseUrl: process.env.API_BASE_URL || 'http://localhost:5021',
});

module.exports = {
  config,
};
