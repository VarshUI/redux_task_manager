import { Provider } from 'react-redux';
import store from './store/store';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div>Web developing</div>
    </Provider>
  );
}

export default App;
