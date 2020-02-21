import React from "react";
import "./Tab.css";

function Tab(props) {
  return (
    <div className="tabs">
      <div className="tab" tabIndex={10} onClick={e => props.handleClick()}>
        Spirited Away
      </div>
      <div className="tab" tabIndex={12} onClick={e => props.handleClick()}>
        Howl's Moving Castle
      </div>
      <div className="tab" tabIndex={16} onClick={e => props.handleClick()}>
        From Up on Poppy Hill
      </div>
      <div className="tab" tabIndex={2} onClick={e => props.handleClick()}>
        My Neighbor Totoro
      </div>
      <div className="tab" tabIndex={8} onClick={e => props.handleClick()}>
        Princess Mononoke
      </div>
      <div className="tab" tabIndex={3} onClick={e => props.handleClick()}>
        Kiki's Delivery Service
      </div>
    </div>
  );
}

export default Tab;
