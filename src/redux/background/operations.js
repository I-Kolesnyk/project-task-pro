import { axiosPublic } from 'services/axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getBackgrounds = createAsyncThunk(
  'backgrounds',
  async (_, thunkAPI) => {
    try {
      const { data } = await axiosPublic.get('/api/backgrounds');
      // const array = data.data[0].backgrounds;
      // console.log('backs', array);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.code);
    }
  }
);
