import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Login from './components/Login';
import FriendList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute';



function App() {
  return (
    <Router>
    <div className="App">
    <li>
            <Link to="/login">Login</Link>
          </li>
        
          <li>
            {localStorage.getItem("token") && <div>
              <Link to="/protected">Protected Page</Link>
            </div>
            }
          </li>
     
        <Switch>
        <PrivateRoute exact path="/protected" component={FriendList} />
          <Route path="/login" component={Login} />
          <Route path="/" component={Login} />
        </Switch>
        
    </div>
    </Router>
  );
}

export default App;
