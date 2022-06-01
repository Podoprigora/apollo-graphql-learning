const axios = require('axios').default;

const http = axios.create({
  baseURL: 'http://localhost:5010',
});

module.exports = { http };
