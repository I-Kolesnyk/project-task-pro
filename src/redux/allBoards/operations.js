import { axiosPrivateJson } from 'services/axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getAllBoards = createAsyncThunk(
  'boards/all',
  async (_, thunkAPI) => {
    try {
      const { data } = await axiosPrivateJson.get('/api/boards');
      return data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.code);
    }
  }
);

export const addNewBoard = createAsyncThunk(
  'boards/add',
  async (board, thunkAPI) => {
    try {
      const { data } = await axiosPrivateJson.post('/api/boards', board);
      console.log(data);
      if (data.status === 'success') {
        window.location.href = `/project-task-pro/home/${data.data.board.title}`;
      }

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.code);
    }
  }
);

export const updateBoardStatus = createAsyncThunk(
  'boards/active',
  async (boardData, thunkAPI) => {
    try {
      const { data } = await axiosPrivateJson.patch(
        `api/boards/${boardData.boardId}/active`,
        boardData.body
      );
      return data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.code);
    }
  }
);
