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

  showMovie = () => {
    console.log(this.state.idSelected);

    // return (this.state.films.map(film => {
    //   // console.log(film.id);
    //   if (film.id === this.state.idSelected) {
    //         return (
    //           <Info
    //             title={film.title}
    //             description={
    //               film.description
    //             }
    //             director={film.director}
    //             release_date={
    //               film.release_date
    //             } key={film}/>
    // )}}))

    return (this.state.idSelected
      ? this.state.films.map(film => {
          if (film.id === this.state.idSelected) {            
            return (
              <Info
                title={film.title}
                description={
                  film.description
                }
                director={film.director}
                release_date={
                  film.release_date
                } key={film}/>
            );
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
          <Info />
        </div>
      </div>
    );
  }
}
export default App;
