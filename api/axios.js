import axios from 'axios';
import { API_PATH } from '../constants/config'

// configure base url
const instance = axios.create({
  baseURL: `${API_PATH}/` ,
});

// intercept requests and add authorization token
instance.interceptors.request.use((config) => {
  config.headers.authorization = `Bearer ngcggf`;
  return config;
});

// intercept response and reload page if request error
// is caused by an expired token
instance.interceptors.response.use(
  response => response,
  (error) => {
    const { response: { status, data } } = error;

    if (status === 403 &&
      data.error === 'User authorization token is expired') {
      window.location.reload();
    }

    return Promise.reject(error);
  }
);

export default instance;
