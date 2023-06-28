import {
  axiosPublic,
  axiosPrivateJson,
  axiosPrivateFormData,
} from 'services/axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const userRegister = createAsyncThunk(
  'auth/register',
  async (user, thunkAPI) => {
    try {
      const { data } = await axiosPublic.post(`/api/users/register`, user);
      const { email, password } = user;

      if (data.status === 'success') {
        const loginData = await axiosPublic.post('/api/users/login', {
          email,
          password,
        });

        return loginData;
      }
      return data;
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
      console.log(data);
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
  async (userId, userData, thunkAPI) => {
    try {
      const { data } = await axiosPrivateFormData.put(
        `/api/users/current/${userId}`,
        userData
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
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.code);
    }
  }
);
