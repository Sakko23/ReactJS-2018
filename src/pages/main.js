import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import './css/main.css';
import Pic from '../assets/pics/2.jpg'
class Main extends Component {
    render() {
      return (
        <div>
            <div className="searchContainer">
                <h1>Вы сможете найти специалистов 
                    практически во всех сферах.</h1>
                <input type="text"/>

                <NavLink to="/search">
                    <button>   
                        Найти
                    </button>
                </NavLink>
                
            </div>
            <div className="wheelContainer">
                <ul className="wheelUl">
                    <li className="wheelLi">
                        <NavLink to="/search">
                            <div className="wheelElement">
                                <p>Еще</p>
                            </div>
                        </NavLink>
                    </li>
                    <li className="wheelLi">
                        <NavLink to="/search">
                            <div className="wheelElement">
                                <p>Доставка</p>
                            </div>
                        </NavLink>
                    </li>
                    <li className="wheelLi">
                        <NavLink to="/search">
                            <div className="wheelElement">
                                <p>Здоровье</p>
                            </div>
                        </NavLink>
                    </li>
                    <li className="wheelLi">
                        <NavLink to="/search">
                            <div className="wheelElement">
                                <p>Обучение</p>
                            </div>
                        </NavLink>
                    </li>
                    <li className="wheelLi">
                        <NavLink to="/search">
                            <div className="wheelElement">
                                <p>Праздники</p>
                            </div>
                        </NavLink>
                    </li>
                    <li className="wheelLi">
                        <NavLink to="/search">
                            <div className="wheelElement">
                                <p>По дому</p>
                            </div>
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="proContainer" style={ { backgroundImage: Pic } }>
                <h1>Мы открыты к сотрудничеству.</h1>
                <h2>Мы найдем вам работу!</h2>
                <button>Стать специалистом</button>
            </div>
        </div>
      );
    }
  }
  
  export default Main;
  