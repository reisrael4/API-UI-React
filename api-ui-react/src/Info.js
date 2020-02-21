import React, { Component } from "react";
import "./Info.css";
import Tab from "./Tab";
// let i = tabIndex;

class Info extends Component {
  constructor(prop) {
    super(prop);
    this.state = {
      tabIndex: Tab.tabIndex
    };
  }
  render() {
    return (
      <div>
        <h1 className="title">{/*this.state.films[10].title*/}</h1>
        <p className="summary">
          <span>Description: </span>
          {/* {this.state.films[10].description} */}
        </p>
        <p className="director">
          <span>Director: </span>
          {/* {this.state.films[10].director} */}
        </p>
        <p>
          <span>Release Date: </span>
          {/* {this.state.films[10].release_date} */}
        </p>
      </div>
    );
  }
}

export default Info;
