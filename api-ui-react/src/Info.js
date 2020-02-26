import React, { Component } from "react";
import "./Info.css";

class Info extends Component {
  render() {
    return (
      <div>
        <h1 className="title">{this.props.title}</h1>
        <p className="summary">
          <span>Description: </span>
           {this.props.description} 
        </p>
        <p className="director">
          <span>Director: </span>
           {this.props.director} 
        </p>
        <p>
          <span>Release Date: </span>
           {this.props.release_date}
        </p>
      </div>
    );
  }
}

export default Info;
