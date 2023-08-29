import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  rockets: [],
  loading: true,
  error: null,
};

export const fetchRockets = createAsyncThunk('get/rockets', async () => {
  const rockets = await axios.get('https://api.spacexdata.com/v3/rockets');
  return rockets.data;
});

export const Rocket = createSlice({
  name: 'Rockets',
  initialState,
  extraReducers(builder) {
    builder.addCase(fetchRockets.fulfilled, (state, { payload }) => {
      state.status = false;
      const data = payload.map((rocket) => ({
        rocket_id: rocket.id,
        rocket_name: rocket.name,
        rocket_description: rocket.description,
        rocket_flickr_images: rocket.flickr_images[0],
      }));
      state.rockets = data;
    });
  },
});
