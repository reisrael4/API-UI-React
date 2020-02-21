import React, { Component } from "react";
import "./Tab.css";

function Tab () {
 
    return (
      <div className="tabs">
        <div className="tab" tabIndex={10} onClick={e => props.handleClick(i)}>
          Spirited Away
        </div>
        <div className="tab" tabIndex={12} onClick={e => props.handleClick(i)}>
          Howl's Moving Castle
        </div>
        <div className="tab" tabIndex={16} onClick={e => props.handleClick(i)}>
          From Up on Poppy Hill
        </div>
        <div className="tab" tabIndex={2} onClick={e => props.handleClick(i)}>
          My Neighbor Totoro
        </div>
        <div className="tab" tabIndex={8} onClick={e => props.handleClick(i)}>
          Princess Mononoke
        </div>
        <div className="tab" tabIndex={3} onClick={e => props.handleClick(i)}>
          Kiki's Delivery Service
        </div>
      </div>
    );
}

export default Tab;
