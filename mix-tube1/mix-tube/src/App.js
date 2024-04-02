import Head from './components/Head';
import Body from './components/Body';
import './App.css';
import store from './utils/Store';
import { Provider } from 'react-redux';
import Button from './components/Button';
import ButtonList from './components/ButtonList';


function App() {
  return (
     <Provider store={store}>
    <div>
      <Head />
      <Body/>
      <ButtonList />
      <Button />
    </div>
     </Provider>
  );
}

export default App;
