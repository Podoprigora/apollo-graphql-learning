const axios = require('axios').default;

const http = axios.create({
  baseURL: 'http://localhost:5021',
});

module.exports = {
  http,
};
