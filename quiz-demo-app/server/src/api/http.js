const axios = require('axios').default;

const { config } = require('../config');

const http = axios.create({
  baseURL: config.apiBaseUrl,
});

module.exports = {
  http,
};
