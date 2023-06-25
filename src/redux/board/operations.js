import { axiosPrivateJson } from 'services/axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getBoardById = createAsyncThunk(
  'board/one',
  async (id, thunkAPI) => {
    try {
      const { data } = await axiosPrivateJson.get(`/api/boards/${id}`);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.code);
    }
  }
);
