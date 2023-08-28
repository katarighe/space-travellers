import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  missions: {},
  loading: false,
  error: null,
};

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {},
});

export default missionsSlice.reducer;
