import React, { Component } from "react";
import "./Results.css";
const Results = props =>{
    return props.results.map(item => (
      <div className="ResultItem">
        <div className="logo">
          <img src={require("../../assets/pics/" + item.img)} alt="logo" />
        </div>
        <div className="orders">{item.orders} отзывов</div>
        <div className="name">{item.name}</div>
        <div className="job">{item.job}</div>
        <div className="address">{item.address}</div>
        <div className="rating">Рейтинг</div>
        <div className="stars">{item.rating}/10</div>
        <div className="orderBtn">
          <button>
            Заказать услугу
          </button>
        </div>
        <div className="reviews">
          <button>
            Отзывы
          </button>
        </div>
      </div>
    ))
}

export default Results;
