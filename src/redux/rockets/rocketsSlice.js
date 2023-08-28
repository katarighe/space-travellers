import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  rockets: [],
  loading: false,
  error: null,
};

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRockets.pending, (state) => {
        state.loading = true;
      })

      .addCase(fetchRockets.fulfilled, (state, action) => {
        state.loading = false;
        const newRocket = [];
        const getRockets = action.payload;
        getRockets.forEach((rocket) => {
          newRocket.push({
            id: rocket.id,
            name: rocket.name,
            description: rocket.description,
            image: rocket.flickr_images[0],
          });
        });
        state.rockets = newRocket;
      })

      .addCase(fetchRockets.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default rocketsSlice.reducer;
