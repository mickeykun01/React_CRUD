import './App.css';
import Store from './Store';
import { Provider } from 'react-redux';
import Router from './Router';

function App() {
  return (
    <div className="App">
       <Provider store = {Store}>
         <Router/>
       </Provider>
    </div>
  ); 
}

export default App;
