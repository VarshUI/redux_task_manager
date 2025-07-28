import React from 'react'
import { useState } from 'react'
import { Box, TextField } from '@mui/material'

const AddHabitToForm: React.FC= () => {
    const [name, setName]= useState<string>("")
    const [frequency, setFrequency] = useState<"daily"|"weekly">("daily");
  return (
    <form>
        <Box sx={{display: 'flex',
        flexDirection: 'column',
        gap: 2,
        }}></Box>
        <TextField label="Habit Name" value={name} onChange={(e)=> setName(e.target.value)}
            placeholder='Enter the Habit'
            fullWidth></TextField>

    </form>
  )
}

export default AddHabitToForm