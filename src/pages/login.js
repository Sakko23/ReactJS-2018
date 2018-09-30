import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './css/register.css';

class Login extends Component {
  render() {
    return (
      <div className="container1">
        <h1 className="h1">Добро пожаловать!</h1>
        <div className="container2">
            <div className="containerElement">
                <h2>Эл.почта</h2>
                <input type="text"></input>
            </div>
            <div className="containerElement">
                <h2>Пароль</h2>
                <input type="password"></input>
            </div>
            <div className="containerElement">
                <img src={require('../assets/pics/check-box.png')} alt="vk" />
                <div className="lleftside">
                    <h3>Запомнить меня</h3>
                </div>
                <div className="rrightside">
                    <h4>Забыли пароль?</h4>
                </div>
                <button>Войти</button>
            </div>
        
        </div>
      </div>
    );
  }
}
export default Login;
