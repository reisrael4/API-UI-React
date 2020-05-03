import React, { Component } from "react";
import "./Info.css";

class Info extends Component {
  render() {
    const { film } = this.props;
    return (
      <div>
        <h1 className="title">{film.title}</h1>
        <p className="summary">
          <span>Description: </span>
          {film.description}
        </p>
        <p className="director">
          <span>Director: </span>
          {film.director}
        </p>
        <p>
          <span>Release Date: </span>
          {film.release_date}
        </p>
      </div>
    );
  }
}

export default Info;
