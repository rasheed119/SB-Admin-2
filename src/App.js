import './App.css';
import { Route, Switch } from 'react-router-dom';
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
