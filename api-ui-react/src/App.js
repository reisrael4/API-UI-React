import React, { Component } from "react";
import "./App.css";
import Container from "./Container";

class App extends Component {
  constructor() {
    super();
    this.state = {
      films: [],
      i: ""
    };
  }
  componentDidMount() {
    let url = "https://ghibliapi.herokuapp.com/films";
    fetch(url)
      .then(res => {
        return res.json();
      })
      .then(res => {
        this.setState({ films: res });
        console.log(this.state.films);
      });
  }
  handleClick = e => {
    e.preventDefault();

    this.setState({ i: e.target.tabIndex });
  };

  render() {
    return (
      <div className="App">
        <header>Some heading, I don't know.</header>
        <Container clicker={this.handleClick} i={this.state.i} />
      </div>
    );
  }
}
export default App;
