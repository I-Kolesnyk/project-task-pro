import { axiosPrivateJson } from 'services/axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getBoardById = createAsyncThunk(
  'board/one',
  async (id, thunkAPI) => {
    try {
      const { data } = await axiosPrivateJson.get("path", id);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.code);
    }
  }
);