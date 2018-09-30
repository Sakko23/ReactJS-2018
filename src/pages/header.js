import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from './login.js'
import Register from './register.js'
import Contacts from './contacts.js'
import './css/header.css';
import logo from "../assets/pics/logo.svg";

import { NavLink } from "react-router-dom";

const Header = () => (
    <header>
        <div className="container">
          <nav>
            <ul>
                <li className="logoMain">
                    <NavLink to="/">
                        <img src={logo} alt="logo"/>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/login" className="helement">
                    Вход
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/register" className="helement">
                    Регистрация
                    </NavLink>
                </li>
                
                <li>
                    <NavLink className="helement" to="/about">
                    О Компании
                    </NavLink>
                </li>
                </ul>
            </nav>

        </div>
    </header>
  );
/*
class Header extends Component {
  render() {
    return (
        <Router>
        <div>
          <ul>
              
            <li><Link to='/login' className="helement">Вход</Link></li>    
            <li><Link to='/register' className="helement">Регистрация</Link></li> 
            <li><Link to='/contacts' className="helement">Контакты</Link></li>       
            <li><Link to='/contacts' className="helement">Стать специалистом</Link></li>  
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
*/
export default Header;