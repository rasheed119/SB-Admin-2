import logo from './logo.svg';
import './App.css';
import Sidenamv from './Components/Sidenamv';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Dashboard from './Components/Dashboard';
import Login from './Components/Login';
import SignIn from './Components/SignIn';


function App() {
  return (
    <div classNameName="App">
        <Switch>

          <Route exact path ="/">
            <Dashboard/>
          </Route>  

          <Route path = "/Login">
            <Login/>
          </Route>

          <Route path="/Signin">
            <SignIn/>
          </Route>

        </Switch>                    
    </div>
  );
}

export default App;
