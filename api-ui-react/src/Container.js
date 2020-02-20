import React, { Component } from 'react';
import Tab from './Tab';
import Info from './Info';
import './Container.css'


class Container extends Component {
    render() {
        return (
            <div className="container">
                <Tab />
                <Info />
            </div>
        );
    }
}

export default Container;