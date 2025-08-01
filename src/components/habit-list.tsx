import React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../store/store';
import { Box, Paper, Typography, Button } from '@mui/material';
import CheckCircleIcon  from '@mui/icons-material/CheckCircle';

const HabitList: React.FC = () => {
  const { habits } = useSelector((state: RootState) => state.habits);
  const today = new Date().toISOString().split("T")[0];

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 4 }}>
      {habits.map((habit) => (
        <Paper key={habit.id} elevation={2} sx={{ p: 2 }}>
          <Typography variant="h6" sx={{textTransform:"capitalize"}}>{habit.name}</Typography>
          <Typography variant="body2" color="text.secondary">
            Frequency: {habit.frequency}
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 1 }}>
            <Button variant="outlined" color={habit.completedDates.includes(today)?"success":"primary"} startIcon={<CheckCircleIcon/>} >Mark Complete</Button>
            <Button variant= "outlined" startIcon={<CheckCircleIcon/>}>Remove Item</Button>
          </Box>
        </Paper>
      ))}
    </Box>
  );
};

export default HabitList;
