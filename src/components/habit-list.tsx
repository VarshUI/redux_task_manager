import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../store/store';
import { completeHabit, removeHabit } from '../store/habit-slice';
import { Box, Paper, Typography, Button } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DeleteIcon from '@mui/icons-material/Delete';

const HabitList: React.FC = () => {
  const dispatch = useDispatch();
  const { habits } = useSelector((state: RootState) => state.habits);
  const today = new Date().toISOString().split("T")[0];

  const handleComplete = (id: string) => {
    dispatch(completeHabit({ id, date: today }));
  };

  const handleRemove = (id: string) => {
    dispatch(removeHabit(id));
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 4 }}>
      {habits.map((habit) => {
        const isCompletedToday = habit.completedDates.includes(today);

        return (
          <Paper key={habit.id} elevation={2} sx={{ p: 2 }}>
            <Typography variant="h6" sx={{ textTransform: "capitalize" }}>
              {habit.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Frequency: {habit.frequency}
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 1, mt: 2 }}>
              <Button
                variant="outlined"
                color={isCompletedToday ? "success" : "primary"}
                startIcon={<CheckCircleIcon />}
                onClick={() => handleComplete(habit.id)}
                disabled={isCompletedToday}
              >
                {isCompletedToday ? "Completed" : "Mark Complete"}
              </Button>
              <Button
                variant="outlined"
                color="error"
                startIcon={<DeleteIcon />}
                onClick={() => handleRemove(habit.id)}
              >
                Remove
              </Button>
            </Box>
          </Paper>
        );
      })}
    </Box>
  );
};

export default HabitList;
