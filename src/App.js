import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from './pages/login.js'
import Register from './pages/register.js'
import Contacts from './pages/contacts.js'
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to='/register'>Register</Link></li>
            <li><Link to='/login'>LOGIN</Link></li>
            <li><Link to='/contacts'>Contacts</Link></li>            
          </ul>


        <hr/>
        <Route path='/register' component={Register} />
        <Route path='/login' component={Login} />
        <Route path='/contacts' component={Contacts} />
        </div>
        </Router>
    
    );
  }
}

export default App;
