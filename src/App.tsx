import { Provider } from 'react-redux';
import store from './store/store';
import { Container, Typography } from '@mui/material';
import AddHabitToForm from './components/add-habit-form';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Container maxWidth="md"><Typography> <h1>Habit Tracker</h1></Typography>
      <AddHabitToForm/> </Container>
    </Provider>
  );
}

export default App;
