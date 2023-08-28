import { configureStore } from '@reduxjs/toolkit';
import { rocketsReducer } from './rockets/rockets';
import missionsReducer from './missions/missionsSlice';
import { dragonsReducer } from './dragons/dragons';

const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
    missions: missionsReducer,
    dragons: dragonsReducer,
  },
});

export default store;
