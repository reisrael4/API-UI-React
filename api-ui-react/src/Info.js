import React, { Component } from "react";
import "./Info.css";

class Info extends Component {
  render() {
    return (
      <div>
        <h1 className="title">{this.props.film.title}</h1>
        <p className="summary">
          <span>Description: </span>
          {this.props.film.description}
        </p>
        <p className="director">
          <span>Director: </span>
          {this.props.film.director}
        </p>
        <p>
          <span>Release Date: </span>
          {this.props.film.release_date}
        </p>
      </div>
    );
  }
}

export default Info;
