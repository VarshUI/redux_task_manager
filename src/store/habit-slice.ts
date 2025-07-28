// habit-slice.ts
import { createSlice } from "@reduxjs/toolkit";

export interface Habit {
  id: string;
  name: string;
  frequence: "daily" | "weekly";
  completedDates: string[];
  createdAt: string;
}

interface HabitState {
  habits: Habit[];
}

const initialState: HabitState = {
  habits: [],
};

const habitSlice = createSlice({
  name: "habits",
  initialState,
  reducers: {
    addHabit: () => {}, // Placeholder
  },
});

export const { addHabit } = habitSlice.actions;

// ✅ THIS IS CRITICAL
export default habitSlice.reducer;
