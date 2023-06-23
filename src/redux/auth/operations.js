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
      const { data } = await axiosPublic.post(`path`, user);

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
      const { data } = await axiosPublic.post(`path`, user);
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
      await axiosPrivateJson.post('path');
      return;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.code);
    }
  }
);
