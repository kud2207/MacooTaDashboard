// src/features/auth/authSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const login = createAsyncThunk(
  'auth/login',
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await axios.post('http://localhost:3001/api/admins/login', { email, password });
      localStorage.setItem('adminToken', response.data.token);
      localStorage.setItem('adminEmail', email);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    email: '',
    token: '',
    error: '',
    loading: false,
  },
  reducers: {
    logout: (state) => {
      state.email = '';
      state.token = '';
      localStorage.removeItem('adminToken');
      localStorage.removeItem('adminEmail');
    },
  },
  extraReducers: {
    [login.pending]: (state) => {
      state.loading = true;
      state.error = ''; 
    },
    [login.fulfilled]: (state, action) => {
      state.loading = false;
      state.token = action.payload.token;
      state.email = action.meta.arg.email;
    },
    [login.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
