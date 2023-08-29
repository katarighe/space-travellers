import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  dragons: [],
  loading: false,
  error: null,
};

export const getDragons = createAsyncThunk('dragons/getDragons', async () => {
  const dragons = await fetch('https://api.spacexdata.com/v3/dragons');
  const data = await dragons.json();
  return data;
});
const dragonsSlice = createSlice({
  name: 'dragons',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getDragons.pending, (state) => {
        state.loading = true;
      })
      .addCase(getDragons.fulfilled, (state, action) => {
        state.loading = false;
        state.error = '';
        state.dragons = action.payload;
      })
      .addCase(getDragons.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },

});

export default dragonsSlice.reducer;
