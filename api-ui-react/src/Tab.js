import React from "react";
import "./Tab.css";

function Tab(props) {
  return (
    <div className="tabs">
      <div
        className="tab"
        id="dc2e6bd1-8156-4886-adff-b39e6043af0c"
        value="1"
        onClick={props.handleClick}
      >
        Spirited Away
      </div>
      <div
        className="tab"
        id="cd3d059c-09f4-4ff3-8d63-bc765a5184fa"
        value="2"
        onClick={props.handleClick}
      >
        Howl's Moving Castle
      </div>
      <div
        className="tab"
        id="45db04e4-304a-4933-9823-33f389e8d74d"
        value="3"
        onClick={props.handleClick}
      >
        From Up on Poppy Hill
      </div>
      <div
        className="tab"
        id="58611129-2dbc-4a81-a72f-77ddfc1b1b49"
        value="4"
        onClick={props.handleClick}
      >
        My Neighbor Totoro
      </div>
      <div
        className="tab"
        id="0440483e-ca0e-4120-8c50-4c8cd9b965d6"
        value="5"
        onClick={props.handleClick}
      >
        Princess Mononoke
      </div>
      <div
        className="tab"
        id="0440483e-ca0e-4120-8c50-4c8cd9b965d6"
        value="6"
        onClick={props.handleClick}
      >
        Kiki's Delivery Service
      </div>
    </div>
  );
}

export default Tab;
