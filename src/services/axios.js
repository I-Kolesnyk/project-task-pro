import axios from 'axios';
import { toast } from 'react-toastify';

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

// axiosPublic.interceptors.response.use(async error => {
//   if (!error.response) {
//     toast.error('Please check your internet connection and try again!');
//   }
//   if (
//     error.response.status === 404 &&
//     error.config.url === '/api//auth/login'
//   ) {
//     toast.error('User is not found. Please sign up!');
//   }
//   if (error.response.status === 409 && error.config.url === '/auth/register') {
//     toast.error('User with such email is already exist.');
//   }
//   return Promise.reject(error);
// });
