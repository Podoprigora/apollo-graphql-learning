const path = require('path');
const dotenv = require('dotenv');

dotenv.config({
  path: path.resolve(__dirname, './.env'),
});

const config = Object.freeze({
  port: process.env.PORT,
  apiBaseUrl: process.env.API_BASE_URL,
});

module.exports = {
  config,
};
