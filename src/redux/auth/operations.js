import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  axiosPublic,
  axiosPrivateJson,
  axiosPrivateFormData,
} from 'services/axios';

export const userRegister = createAsyncThunk(
  'auth/register',
  async (user, thunkAPI) => {
    try {
      const { data } = await axiosPublic.post(`/api/users/register`, user);
      const { email, password } = user;
      let userData;
      if (data.status === 'success') {
        const { data } = await axiosPublic.post('/api/users/login', {
          email,
          password,
        });
        userData = data;

        return userData;
      }
      return userData;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.code);
    }
  }
);

export const userLogin = createAsyncThunk(
  'auth/login',
  async (user, thunkAPI) => {
    try {
      const { data } = await axiosPublic.post(`/api/users/login`, user);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.code);
    }
  }
);

export const userLogOut = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      await axiosPrivateJson.post('/api/users/logout');

      return;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.code);
    }
  }
);

export const currentUser = createAsyncThunk(
  'auth/current',
  async (_, thunkAPI) => {
    try {
      const { data } = await axiosPrivateJson.get(`/api/users/current`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.code);
    }
  }
);

export const editProfile = createAsyncThunk(
  'auth/profile',
  async (userData, thunkAPI) => {
    try {
      const { data } = await axiosPrivateFormData.put(
        `/api/users/current/${userData.userId}`,
        userData.formData
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.code);
    }
  }
);

export const editTheme = createAsyncThunk(
  'auth/theme',
  async (userData, thunkAPI) => {
    try {
      const { data } = await axiosPrivateJson.patch(
        `/api/users/current/${userData.id}/theme`,
        userData.body
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.code);
    }
  }
);

export const userNeedHelp = createAsyncThunk(
  'auth/current',
  async (userMessage, thunkAPI) => {
    try {
      const { data } = await axiosPrivateJson.post(`/api/email`, userMessage);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.code);
    }
  }
);
