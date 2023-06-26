import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosPublic } from 'services/axios';

const userRegister = createAsyncThunk(
  'auth/register',
  async (user, thunkAPI) => {
    try {
      const { data } = await axiosPublic.post(`/api/users/register`, user);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.code);
    }
  }
);

export default userRegister;
