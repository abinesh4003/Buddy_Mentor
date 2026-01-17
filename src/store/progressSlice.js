import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  unlockedModules: 0,
  started: false,
};

const progressSlice = createSlice({
  name: "progress",
  initialState,
  reducers: {
    startCourse(state) {
      state.started = true;
      state.unlockedModules = 1;
    },
    unlockNextModule(state) {
      state.unlockedModules += 1;
    },
    resetProgress(state) {
      state.started = false;
      state.unlockedModules = 0;
    },
  },
});

export const {
  startCourse,
  unlockNextModule,
  resetProgress,
} = progressSlice.actions;

export default progressSlice.reducer;
