import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

export const fetchTrucks = createAsyncThunk(
  'trucks/fetchAll',
  async (_, thunkApi) => {
    try {
      const response = await axios.get('/campers');
        console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const fetchTruckDetails = createAsyncThunk(
  'trucks/fetchById',
    async (id, thunkApi) => {
    try {
      const response = await axios.get(`/campers/${id}`);
        console.log(response);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);