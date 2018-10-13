import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./css/main.css";
import Pic from "../assets/pics/2.jpg";
class Main extends Component {
  render() {
    return (
      <div className="container">
        <div className="searchContainer">
          <div className="title">
            <h1>
              Вы сможете найти специалистов <br />
              практически во всех сферах.
            </h1>
          </div>
          <div className="form">
            <input type="text" />
            <NavLink to="/search">
              <button>Найти</button>
            </NavLink>
          </div>
        </div>
        <div className="wheelsContainer">
          <div className="wheel">
            <img src={require("../assets/pics/home.png")} alt="home" />
            <p className="wheel-name">По дому</p>
          </div>
          <div className="wheel">
            <img src={require("../assets/pics/flags.png")} alt="home" />
            <p className="wheel-name">Торжество</p>
          </div>
          <div className="wheel">
            <img src={require("../assets/pics/owl.png")} alt="home" />
            <p className="wheel-name">Обучение</p>
          </div>
          <div className="wheel">
            <img src={require("../assets/pics/apple.png")} alt="home" />
            <p className="wheel-name">Здоровье</p>
          </div>
          <div className="wheel">
            <img src={require("../assets/pics/trucking.png")} alt="home" />
            <p className="wheel-name">Доставка</p>
          </div>
          <div className="wheel">
            <img src={require("../assets/pics/menu.png")} alt="home" />
            <p className="wheel-name">Еще</p>
          </div>
        </div>
        <div className="proContainer">
          <div className="content">
            <h1>Мы открыты к сотрудничеству.</h1>
            <h2>Мы найдем вам работу!</h2>
            <NavLink to="/search">
              <button>Стать специалистом</button>
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
