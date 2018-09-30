import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from './pages/login.js'
import Register from './pages/register.js'
import Contacts from './pages/contacts.js'
import Header from './pages/header.js'
import Main from './pages/main.js'
import Footer from './pages/footer.js';
import Search from './pages/search';
class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Route exact path="/" component={Main} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} /> 
        <Route path="/search" component={Search} /> 

      </div>
    
    );
  }
}

export default App;
