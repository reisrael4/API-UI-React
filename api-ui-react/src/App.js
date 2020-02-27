import React, { Component } from "react";
import "./App.css";
import Tab from "./Tab";
import Info from "./Info";

class App extends Component {
  constructor() {
    super();
    this.state = {
      films: null,
      idSelected: '',
      tabSelected: "1"
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
    console.log(e.target.id);
    this.setState({ idSelected: e.target.id, tabSelected: e.target.value});
    this.showMovie()
    
  };

  showMovie = () => {
    return this.state.films
      ? this.state.films.map(i => {
          if (this.state.films[i].id === this.state.idSelected) {
            return (
              <Info
                title={this.state.films[i].idSelected.title}
                description={
                  this.state.films[i].idSelected.description
                }
                director={this.state.films[i].idSelected.director}
                release_date={
                  this.state.films[i].idSelected.release_date
                } key={i}/>
            );
          }
      })
      : "";
  };

  render() {
    return (
      <div className="App">
        <header>Some heading, I don't know.</header>
        <div className="container">
          <Tab clicker={this.handleClick} />
          <Info />
        </div>
      </div>
    );
  }
}
export default App;
