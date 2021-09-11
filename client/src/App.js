import "./App.css";
import Detection from "./components/detection";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import CameraPage from './pages/CameraPage';

function App() {
  return (
    <Router>
       <div>
        <Switch>
          <Route exact path='/' component={HomePage}></Route>
          <Route path='/shop' component={ShopPage}></Route>
          <Route path='/camera' component={CameraPage}></Route>
        </Switch>
      </div>
    </Router>
  );

}

export default App;
