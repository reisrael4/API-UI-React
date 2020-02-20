import React, { Component } from 'react';
import './Tab.css';

class Tab extends Component {
    render() {
        return (
          <div className="tabs">
            <div className="tab">Tab 1</div>
            <div className="tab">Tab 2</div>
            <div className="tab">Tab 3</div>
            <div className="tab">Tab 4</div>
          </div>
        );
    }
}

export default Tab;