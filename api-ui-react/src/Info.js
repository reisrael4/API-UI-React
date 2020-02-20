import React, { Component } from "react";
import "./Info.css";

class Info extends Component {
  constructor() {
    super();
    this.state = {
      films: []
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
        console.log(this.state);
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
