import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosPrivateJson } from 'services/axios';

const currentUser = createAsyncThunk('auth/current', async (_, thunkAPI) => {
  try {
    const { data } = await axiosPrivateJson.get(`/api/users/current`);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.code);
  }
});

export default currentUser;
