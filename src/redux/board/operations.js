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

export const addColumn = createAsyncThunk(
  'board/addColumn',
  async (columnData, thunkAPI) => {
    try {
      const { data } = await axiosPrivateJson.post(`/api/columns`, columnData);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.code);
    }
  }
);

export const addCard = createAsyncThunk(
  'board/addCard',
  async (cardData, thunkAPI) => {
    try {
      const { data } = await axiosPrivateJson.post(`/api/tasks`, cardData);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.code);
    }
  }
);
