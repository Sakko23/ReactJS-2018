import React, { Component } from "react";
import "./css/search.css";
import Results from "../Components/Results/Results";
class Search extends Component {
  render() {

    const data = [
      {
        'name': 'Martin Garrix',
        'job': 'DJ',
        'address': 'Алматы',
        'rating': 9.6,
        'orders': 137,
        'img':'logo1.jpg'
      },
      {
        'name': 'Diplo',
        'job': 'DJ',
        'address': 'Алматы',
        'rating': 9.6,
        'orders': 137,
        'img':'logo2.jpg'
      },
      {
        'name': 'Аксель Хэдфорс',
        'job': 'DJ',
        'address': 'Алматы',
        'rating': 9.8,
        'orders': 137,
        'img':'logo3.jpg'
      }
    ]


    return (
      <div className="container">
        <div className="resultsContainerBack">
          <div className="resultsContainer">
            <div className="searchBar">
              <input type="text" />
              <button>Поиск</button>
            </div>
            <div className="results">
              <Results results={data}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
