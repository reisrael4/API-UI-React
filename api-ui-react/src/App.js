import React from "react";
import "./App.css";
import Container from "./Container";

handleClick = e => {
  e.preventDefault();
  let i = e.target.tabIndex;
};

function App() {
  return (
    <div className="App">
      <header>Some heading, I don't know.</header>
      <Container clicker={this.handleClick} />
    </div>
  );
}

export default App;
