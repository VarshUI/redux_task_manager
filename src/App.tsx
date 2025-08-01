import { Provider } from 'react-redux';
import store from './store/store';
import { Container, Typography } from '@mui/material';
import AddHabitToForm from './components/add-habit-form';
import './App.css';
import HabitList from './components/habit-list';

function App() {
  return (
    <Provider store={store}>
      <Container maxWidth="md"><Typography component="h1" variant="h4"> Habit Tracker</Typography>
      <AddHabitToForm/>
      <HabitList/> </Container>
    </Provider>
  );
}

export default App;
