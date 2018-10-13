import React, { Component } from 'react';
import { auth } from '../firebase';
import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from "react-router-dom";
import * as routes from '../constants/routes';
import './css/register.css';



const SignUpPage = ({ history }) =>
  <div>
    <h1>SignUp</h1>
    <Register history={history} />
  </div>


const INITIAL_STATE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null,
    logged: false,
  };
  
const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value,
});


class Register extends Component {
    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE };
    }

    onSubmit = (event) => {
        const {
        username,
        email,
        passwordOne,
        } = this.state;

        const {
            history,
        } = this.props;


          
        auth.doCreateUserWithEmailAndPassword(email, passwordOne)
        .then(authUser => {
            this.setState({ ...INITIAL_STATE });
            history.push(routes.HOME);
        })
        .catch(error => {
            this.setState(byPropKey('error', error));
        });
        
        event.preventDefault();
    }
    


    render() {

        const {
            username,
            email,
            passwordOne,
            passwordTwo,
            error,
            } = this.state;


        const isInvalid =
            passwordOne !== passwordTwo ||
            passwordOne === '' ||
            email === '' ||
            username === '';
        
    return (
      <div className="container1">
       <form onSubmit={this.onSubmit}>
        <h1 className="h1">Регистрация</h1>
        <div className="container2">
            <div className="containerElement">
                <h2>Имя пользователя</h2>
                <input 
                    value={username}
                    type="text"
                    onChange={event => this.setState(byPropKey('username', event.target.value))}

                />
            </div>
            <div className="containerElement">
                <h2>Эл.почта</h2>
                <input
                    value={email}
                    onChange={event => this.setState(byPropKey('email', event.target.value))}
                    type="text"
                    
                />
            </div>
            <div className="containerElement">
                <h2>Пароль</h2>
                <input
                    value={passwordOne}
                    onChange={event => this.setState(byPropKey('passwordOne', event.target.value))}
                    type="password"
                    placeholder="Password"
                />
            </div>
            <div className="containerElement">
                <h2> Повторите пароль</h2>
                <input
                    value={passwordTwo}
                    onChange={event => this.setState(byPropKey('passwordTwo', event.target.value))}
                    type="password"
                    placeholder="Confirm Password"
                />
            </div>
            <div className="containerElement">
                <img src={require('../assets/pics/check-box.png')} alt="vk" />
                <div className="lleftside">
                    <h3>Запомнить меня</h3>
                </div>
                <div className="rrightside">
                    <h4>Забыли пароль?</h4>
                </div>
                <button disabled={isInvalid} type="submit">Зарегистрироваться</button>
            </div>
        </div>
        </form>
      </div>
    );
  }
}
export default withRouter (Register);
