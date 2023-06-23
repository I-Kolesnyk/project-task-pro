import { axiosPrivateJson } from 'services/axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getAllBoards = createAsyncThunk(
  'boards/all',
  async (_, thunkAPI) => {
    try {
      const { data } = await axiosPrivateJson.get("path");

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.code);
    }
  }
);
