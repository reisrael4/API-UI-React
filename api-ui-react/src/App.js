import React, { Component } from "react";
import "./App.css";
import Container from "./Container";
import Info from "./Info";

class App extends Component {
  constructor() {
    super();
    this.state = {
      films: null,
      tabSelected: "10",
      idSelected: ""
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
    console.log(e.target);
    this.setState({ tabSelected: e.target.value, idSelected: e.target.id });
  };

  showMovie = () => {
    return this.state.films
      ? this.state.films.map(i => {
          if (this.films[i] === this.state.tabSelected) {
            return (
              <Info
                title={this.state.films[this.state.idSelected].title}
                description={
                  this.state.films[this.state.idSelected].description
                }
                director={this.state.films[this.state.idSelected].director}
                release_date={
                  this.state.films[this.state.idSelected].release_date
                }
              />
            );
          }
          return <Info />;
        })
      : "";
  };

  render() {
    return (
      <div className="App">
        <header>Some heading, I don't know.</header>
        <Container clicker={this.handleClick} i={this.state.idSelected} />
      </div>
    );
  }
}
export default App;
