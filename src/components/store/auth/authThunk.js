import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchRequest } from '../../lib/fetchAPI';

export const signUpRequest = createAsyncThunk(
  'auth/signUp',
  async (data, { dispatch, rejectWithValue }) => {
    try {
      console.log(data);
      const response = fetchRequest("/auth/register", { method: "post", data: data })
      console.log(await response);
      return response.data
    } catch (error) {
      return rejectWithValue(error)
    }
  }
);
export const signInRequest = createAsyncThunk(
  'auth/signIn',
  async (data, { dispatch, rejectWithValue }) => {
    try {
      console.log(data);
      const response = await fetchRequest("/auth/login", { method: "post", data: data })
      return response.data
    } catch (error) {
      return rejectWithValue(error)
    }
  }
);
