import React, { useState } from 'react';
import {
  Box,
  FormControl,
  TextField,
  InputLabel,
  Select,
  MenuItem,
  Button
} from '@mui/material';
import { useDispatch } from 'react-redux';
import type { Appdispatch } from '../store/store';
import { addHabit } from '../store/habit-slice';

const AddHabitToForm: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [frequency, setFrequency] = useState<'daily' | 'weekly'>('daily');

  const dispatch = useDispatch<Appdispatch>()
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(name.trim()){
      dispatch(addHabit({name,frequency, }));
      setName("");
    }
    console.log({ name, frequency });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
        }}
      >
        <TextField
          label="Habit Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter the Habit"
          fullWidth
        />

        <FormControl fullWidth>
          <InputLabel id="frequency-label">Frequency</InputLabel>
          <Select
            labelId="frequency-label"
            value={frequency}
            onChange={(e) => setFrequency(e.target.value as 'daily' | 'weekly')}
            label="Frequency"
          >
            <MenuItem value="daily">Daily</MenuItem>
            <MenuItem value="weekly">Weekly</MenuItem>
          </Select>
        </FormControl>

        <Button type="submit" color="primary" variant="contained">
          Add Habit
        </Button>
      </Box>
    </form>
  );
};

export default AddHabitToForm;
