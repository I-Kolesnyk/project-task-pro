import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosPrivateJson } from 'services/axios';

const editTheme = createAsyncThunk('auth/theme', async (userData, thunkAPI) => {
  try {
    const { data } = await axiosPrivateJson.patch(
      `/api/users/current/${userData.id}/theme`,
      userData[0]
    );
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue(error.code);
  }
});

export default editTheme;
