import React from "react";
import Tab from "./Tab";
import Info from "./Info";
import "./Container.css";

function Container(props) {
  return (
    <div className="container">
      <Tab clicker={props.handleClick} />
      <Info />
    </div>
  );
}

export default Container;
