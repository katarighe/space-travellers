import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  missions: [],
  loading: false,
  error: null,
  joinedMissions: [],
};

export const fetchMissions = createAsyncThunk('missions/fetchMissions', async () => {
  const response = await fetch('https://api.spacexdata.com/v3/missions');
  const data = await response.json();
  return data;
});

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    joinMission: (state, action) => {
      const missionId = action.payload;
      state.missions = state.missions.map(
        (mission) => (mission.mission_id === missionId ? { ...mission, reserved: true } : mission),
      );
      state.joinedMissions.push(missionId);
    },
    leaveMission: (state, action) => {
      const missionId = action.payload;
      const index = state.joinedMissions.indexOf(missionId);
      if (index !== -1) {
        state.joinedMissions.splice(index, 1);
      }
      state.missions = state.missions.map(
        (mission) => (mission.mission_id === missionId ? { ...mission, reserved: false } : mission),
      );
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchMissions.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMissions.fulfilled, (state, action) => {
        state.loading = false;
        state.missions = action.payload;
      })
      .addCase(fetchMissions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { joinMission, leaveMission } = missionsSlice.actions;
export default missionsSlice.reducer;
