import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL_API,
  timeout: 30000,
});

instance.interceptors.response.use(response => {
  return Promise.resolve(response.data);
});

export default instance;
