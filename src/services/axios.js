import axios from 'axios';
import { store } from 'redux/store';

// const BASE_URL = process.env.API_URL;
const BASE_URL = 'https://task-pro-api.onrender.com';

export const axiosPublic = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const axiosPrivateJson = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const axiosPrivateFormData = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});

axiosPrivateJson.interceptors.request.use(
  async config => {
    const token = store?.getState()?.auth?.token;
    if (token) {
      if (config?.headers) {
        config.headers['Authorization'] = `Bearer ${
          store?.getState()?.auth?.token
        }`;
      }
    } else {
      return (window.location.href = '/auth/login');
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

axiosPrivateFormData.interceptors.request.use(
  async config => {
    const token = store?.getState()?.auth?.token;
    if (token) {
      if (config?.headers) {
        config.headers['Authorization'] = `Bearer ${
          store?.getState()?.userData?.token
        }`;
      }
    } else {
      return (window.location.href = '/auth/login');
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);
