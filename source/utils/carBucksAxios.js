import axios from 'axios';
import { store } from '../redux/store';
import { baseURL } from './endPoint';
const CarBucksAxios = axios.create({
  baseURL,
});

CarBucksAxios.interceptors.request.use(config => {
  if (store.getState().auth.token) {
    config.headers['Authorization'] = 'Bearer ' + store.getState().auth.token;
  }
  config.headers['Accept'] = 'application/json';
  config.headers['Content-Type'] = 'application/json';
  return config;
});

export default CarBucksAxios;
