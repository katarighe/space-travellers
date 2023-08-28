import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  dragons: [],
  loading: false,
  error: null,
};

const dragonsSlice = createSlice({
  name: 'dragons',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDragons.pending, (state) => {
        state.loading = true;
      })

      .addCase(fetchDragons.fulfilled, (state, action) => {
        state.loading = false;
        const newRocket = [];
        const getDragons = action.payload;
        getDragons.forEach((rocket) => {
          newRocket.push({
            id: rocket.id,
            name: rocket.name,
            description: rocket.description,
            image: rocket.flickr_images[0],
          });
        });
        state.dragons = newRocket;
      })

      .addCase(fetchDragons.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default dragonsSlice.reducer;
