import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  rockets: [],
  loading: false,
  error: null,
};

export const fetchRockets = createAsyncThunk('get/rockets', async () => {
  const rockets = await axios.get('https://api.spacexdata.com/v3/rockets');
  const data = await rockets.json();
  return data;
});

export const Rocket = createSlice({
  name: 'Rockets',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchRockets.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRockets.fulfilled, (state, action) => {
        state.loading = false;
        state.rockets = action.payload;
        state.error = null;
      })
      .addCase(fetchRockets.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default Rocket.reducer;
