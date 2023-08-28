import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  dragons: {},
  loading: false,
  error: null,
};

const dragonsSlice = createSlice({
  name: 'dragons',
  initialState,
  reducers: {
    // This reducer will be called when the `dragons` action is dispatched
    setDragons(state, action) {
      state.dragons = action.payload;
    },
    // This reducer will be called when the `loading` action is dispatched
    setLoading(state, action) {
      state.loading = action.payload;
    },
    // This reducer will be called when the `error` action is dispatched
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export default dragonsSlice.reducer;