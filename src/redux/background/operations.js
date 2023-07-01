import { axiosPublic } from 'services/axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getBackgrounds = createAsyncThunk(
  'backgrounds',
  async (_, thunkAPI) => {
    try {
      const { data } = await axiosPublic.get('/api/backgrounds');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.code);
    }
  }
);
