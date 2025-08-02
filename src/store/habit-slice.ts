import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface Habit {
  id: string;
  name: string;
  frequency: "daily" | "weekly";
  completedDates: string[];
  createdAt: string;
}

interface HabitState {
  habits: Habit[];
}

const initialState: HabitState = {
  habits: [],
};

interface AddHabitPayload {
  name: string;
  frequency: "daily" | "weekly";
}

interface CompleteHabitPayload {
  id: string;
  date: string;
}

const habitSlice = createSlice({
  name: "habits",
  initialState,
  reducers: {
    addHabit: (state, action: PayloadAction<AddHabitPayload>) => {
      const newHabit: Habit = {
        id: Date.now().toString(),
        name: action.payload.name,
        frequency: action.payload.frequency,
        completedDates: [],
        createdAt: new Date().toISOString(),
      };
      state.habits.push(newHabit);
    },

    completeHabit: (state, action: PayloadAction<CompleteHabitPayload>) => {
      const { id, date } = action.payload;
      const habit = state.habits.find(h => h.id === id);
      if (habit && !habit.completedDates.includes(date)) {
        habit.completedDates.push(date);
      }
    },

    removeHabit: (state, action: PayloadAction<string>) => {
      state.habits = state.habits.filter(habit => habit.id !== action.payload);
    },
  },
});

export const { addHabit, completeHabit, removeHabit } = habitSlice.actions;
export default habitSlice.reducer;
