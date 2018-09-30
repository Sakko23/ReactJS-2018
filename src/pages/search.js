import React, { Component } from 'react';
import './css/search.css';
import Pic from '../assets/pics/2.jpg'
class Search extends Component {
    render() {
      return (
        <div>
            <div className="searchContainer" style={ { backgroundImage: Pic } }>
                <div className="searchBar">
                    <input type="text"/>
                        <button>   
                            Найти
                        </button>
                
                <div className="resultsContainer">
                    <div className="result">
                        <div className="logo">
                            <img className="item1"src={require("../assets/pics/logo1.jpg")}></img>
                            <h3 className="item5" id="rev">137 отзывов</h3>
                        </div>
                        <h2 className="item2">Martin Garrix</h2>
                        <h3 className="item3">DJ</h3>
                        <h4 className="item4">Алматы</h4>
                        
                        <h3 className="item6">Рейтинг 9,6</h3>
                        <button className="item7" id="hirebtn">Заказать услугу</button>
                        <button className="item8" id="writebtn">Написать сообщение</button>
                    </div>
                    <div className="result">
                        <div className="logo">
                            <img className="item1"src={require("../assets/pics/logo2.jpg")}></img>
                            <h3 className="item5" id="rev">84 отзывов</h3>
                        </div>
                        <h2 className="item2">Diplo</h2>
                        <h3 className="item3">DJ</h3>
                        <h4 className="item4">Усть-каменогорск</h4>
                        
                        <h3 className="item6">Рейтинг 9,1</h3>
                        <button className="item7" id="hirebtn">Заказать услугу</button>
                        <button className="item8" id="writebtn">Написать сообщение</button>
                    </div>
                    <div className="result">
                        <div className="logo">
                            <img className="item1"src={require("../assets/pics/logo3.jpg")}></img>
                            <h3 className="item5" id="rev">117 отзывов</h3>
                        </div>
                        <h2 className="item2">Axwell</h2>
                        <h3 className="item3">DJ</h3>
                        <h4 className="item4">Астана</h4>
                        
                        <h3 className="item6">Рейтинг 9,3</h3>
                        <button className="item7" id="hirebtn">Заказать услугу</button>
                        <button className="item8" id="writebtn">Написать сообщение</button>
                    </div>
                    
                </div>
                </div>
            </div>
        </div>
      );
    }
  }
  
  export default Search;
  