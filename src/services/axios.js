import axios from 'axios';
import { toast } from 'react-toastify';

// const BASE_URL = 'https://task-pro-api.onrender.com';
const BASE_URL = 'http://localhost:8682';

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
    console.log(token);
    if (token) {
      console.log('In');
      if (config?.headers) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
    } else {
      return;
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
    console.log(parsedUser);
    const token = parsedUser.token.slice(1, -1);
    if (token) {
      if (config?.headers) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
    } else {
      return;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

axiosPublic.interceptors.response.use(
  response => response,
  async error => {
    console.log(error);
    if (error.response.status === 500) {
      toast.error('Something has happened. Please try again later.');
    }
    if (error.response.status === 400) {
      toast.error('Something has happened. Please report us an error!');
    }
    if (
      error.response.status === 404 &&
      error.config.url === '/api/users/login'
    ) {
      toast.error('Email or password is incorrect');
    }
    if (
      error.response.status === 409 &&
      error.config.url === '/api//users/register'
    ) {
      toast.error('User with such email is already exist.');
    }
    return Promise.reject(error);
  }
);

axiosPrivateFormData.interceptors.response.use(
  async response => {
    console.log(response);
    if ((response.data.status = 200)) {
      toast.success('User data were successfully updated');
      return response;
    }
    return response;
  },
  async error => {
    console.log(error);
    if (error.response.status === 500) {
      toast.error('Something has happened. Please try again later.');
    }
    if (error.response.status === 401) {
      return (window.location.href = '/project-task-pro/auth/login');
    }
    if (error.response.status === 400) {
      toast.error('Something has happened. Please report us an error!');
    }
    if (error.response.status === 409) {
      toast.error('User with such email is already exist.');
    }
    return Promise.reject(error);
  }
);

axiosPrivateJson.interceptors.response.use(
  async response => {
    console.log('response -------------> ', response);
    if (response.data.code === 201 && response.config.url === '/api/boards') {
      toast.success('New board was successfully added');
      return response;
    }
    if (response.data.code === 200 && response.config.url === '/api/email') {
      toast.success(
        'Your question was sent. We will answer your as soon as posiible.'
      );
      return response;
    }
    return response;
  },
  async error => {
    if (error.response.status === 500) {
      toast.error('Something has happened. Please try again later.');
    }
    if (error.response.status === 401) {
      return (window.location.href = '/project-task-pro/auth/login');
    }
    if (error.response.status === 400) {
      toast.error('Something has happened. Please report us an error!');
    }
    if (error.response.status === 409 && error.config.url === '/api/boards') {
      toast.error('A board with this name already exists');
    }
    return Promise.reject(error);
  }
);
