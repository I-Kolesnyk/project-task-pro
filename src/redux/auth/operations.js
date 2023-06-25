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
  async (userId, userData, thunkAPI) => {
    try {
      const { data } = await axiosPrivateJson.patch(
        `/api/users/current/${userId}/theme`,
        userData
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.code);
    }
  }
);
