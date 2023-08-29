import { configureStore } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';
import { Rockets } from './rockets/rocketsSlice';
import missionsReducer from './missions/missionsSlice';
import dragonsReducer from './dragons/dragonsSlice';

const store = configureStore({
  reducer: {
    rockets: Rockets.reducer,
    missions: missionsReducer,
    dragons: dragonsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
