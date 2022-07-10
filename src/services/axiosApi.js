const axios = require('axios');

const defaultHeaders = {
  'Content-Type': 'application/json',
};

const instance = axios.create({
  baseURL: 'https://pluga.co/',
  timeout: 5000,
  headers: defaultHeaders,
});

const api = {
  get: (url, headers) => instance.get(url, { headers }),
  post: (url, data, headers) => instance.post(url, data, { headers }),
  put: (url, data, headers) => instance.put(url, data, { headers }),
  delete: (url, headers) => instance.delete(url, { headers }),
};

module.exports = api;
