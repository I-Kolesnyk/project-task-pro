import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosPrivateJson } from 'services/axios';

const userLogOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axiosPrivateJson.post('/api/users/logout');
    return;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.code);
  }
});

export default userLogOut;
