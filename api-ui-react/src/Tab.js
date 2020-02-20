import React, { Component } from "react";
import "./Tab.css";

class Tab extends Component {
  
  render() {
    return (
      <div className="tabs">
        <div className="tab">Spirited Away</div>
        <div className="tab">Howl's Moving Castle</div>
        <div className="tab">From Up on Poppy Hill</div>
        <div className="tab">My Neighbor Totoro</div>
        <div className="tab">Princess Mononoke</div>
        <div className="tab">Kiki's Delivery Service</div>
      </div>
    );
  }
}

export default Tab;
