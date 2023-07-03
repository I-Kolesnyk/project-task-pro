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

export const editCard = createAsyncThunk(
  'board/editCard',
  async (cardData, thunkAPI) => {
    try {
      const { title, description, priority, deadline } = cardData;
      const newTask = { title, description, priority, deadline };
      const { data } = await axiosPrivateJson.put(
        `/api/tasks/${cardData._id}`,
        newTask
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.code);
    }
  }
);

export const deleteCard = createAsyncThunk(
  'board/deleteCard',
  async (taskId, thunkAPI) => {
    try {
      const { data } = await axiosPrivateJson.delete(`/api/tasks/${taskId}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editColumn = createAsyncThunk(
  'board/editColumn',
  async (columnData, thunkAPI) => {
    try {
      const { columnId, title } = columnData;
      const columnTitle = { title };
      const { data } = await axiosPrivateJson.put(
        `/api/columns/${columnId}`,
        columnTitle
      );
      console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.code);
    }
  }
);

export const deleteColumn = createAsyncThunk(
  'board/deleteColumns',
  async (columnId, thunkAPI) => {
    try {
      const { data } = await axiosPrivateJson.delete(
        `/api/columns/${columnId}`
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
