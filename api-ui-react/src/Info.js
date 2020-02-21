import React, { Component } from "react";
import "./Info.css";
import Tab from "./Tab";
// let i = tabIndex;

class Info extends Component {
  constructor(prop) {
    super(prop);
    this.state = {
      films: [],
      tabIndex: Tab.tabIndex
    };
  }
  componentDidMount() {
    this.getMovies();
  }
  getMovies = () => {
    let url = "https://ghibliapi.herokuapp.com/films";
    fetch(url)
      .then(res => {
        return res.json();
      })
      .then(res => {
        this.setState({ films: res });
        console.log(this.state.films);
      });
  };
  render() {
    if (!this.state.films.length) {
      return null;
    } else {
      return (
        <div>
          <h1 className="title">{this.state.films[10].title}</h1>
          <p className="summary">
            <span>Description: </span>
            {this.state.films[10].description}
          </p>
          <p className="director">
            <span>Director: </span>
            {this.state.films[10].director}
          </p>
          <p>
            <span>Release Date: </span>
            {this.state.films[10].release_date}
          </p>
        </div>
      );
    }
  }
}

export default Info;
