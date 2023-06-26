import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosPublic } from 'services/axios';

const userLogin = createAsyncThunk('auth/login', async (user, thunkAPI) => {
  try {
    const { data } = await axiosPublic.post(`/api/users/login`, user);
    console.log(data);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.code);
  }
});

export default userLogin;
