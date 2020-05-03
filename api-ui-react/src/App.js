import React, { Component } from "react";
import "./App.css";
import Tab from "./Tab";
import Info from "./Info";

class App extends Component {
  constructor() {
    super();
    this.state = {
      films: null,
      idSelected: null,
      film: null,
    };
  }
  componentDidMount() {
    let url = "https://ghibliapi.herokuapp.com/films";
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        this.setState({ films: res });
        console.log(this.state.films);
      });
  }
  handleClick = (e) => {
    console.log(e.target.id);
    this.setState({ idSelected: e.target.id }, () => {
      this.showMovie();
    });
    // this.showMovie();
  };

// tab has access to this function
// selects film, finds its information
// set film to state, pass film to info as props
// render the below <Info> in the info.js file

  showMovie = () => {
    console.log(this.state.idSelected);

    return (this.state.idSelected
      ? this.state.films.map(film => {
          if (film.id === this.state.idSelected) {            
            this.setState({film: film})
          }
      })
      : "");
  };

  render() {
    return (
      <div className="App">
        <header>Some heading, I don't know.</header>
        <div className="container">
          <Tab clicker={this.handleClick} />
          {this.state.film ? <Info film={this.state.film}/> : ""}
        </div>
      </div>
    );
  }
}
export default App;
