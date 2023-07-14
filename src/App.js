import './App.css';
import { Provider } from 'react-redux';
import store from './Redux with React/redux/store';
import CakeContainer from './Redux with React/redux/cake/CakeContainer';
import HooksCakeContainer from './Redux with React/redux/cake/HooksCakeContainer';
import IceCreamContainer from './Redux with React/redux/iceCream/IceCreamContainer';
import NewCakeContainer from './Redux with React/redux/cake/NewCakeContainer';
import ItemContainer from './Redux with React/redux/ItemContainer';
import UserContainer from './Redux with React/redux/users/UserContainer';

function App() {
  return (
    <div className="app">
      <Provider store={store}>
        <h1 className='project__name'>React Redux</h1>
        <div className="redux__components">
          <CakeContainer />
          <IceCreamContainer />
          <HooksCakeContainer />
          <NewCakeContainer />
          <ItemContainer cake />
          <ItemContainer />
          <UserContainer />
        </div>
      </Provider>
    </div>
  );
}

export default App;
