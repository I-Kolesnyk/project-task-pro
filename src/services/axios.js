import axios from 'axios';
// import { store } from 'redux/store';

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
    const user = localStorage.getItem('persist:auth');
    const parsedUser = JSON.parse(user);
    const token = parsedUser.token.slice(1, -1);
    if (token) {
      if (config?.headers) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
    } else {
      return (window.location.href = '/project-task-pro/auth/login');
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

axiosPrivateFormData.interceptors.request.use(
  async config => {
    const user = localStorage.getItem('persist:auth');
    const parsedUser = JSON.parse(user);
    const token = parsedUser.token.slice(1, -1);
    if (token) {
      if (config?.headers) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
    } else {
      return (window.location.href = '/project-task-pro/auth/login');
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);
