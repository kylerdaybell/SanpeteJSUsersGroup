import React, { Component } from 'react';
import logo from '../logo.png';

class Homepage extends Component{
    render() {
        return (
            <div className="App">
                <img src={logo} className="App-logo" alt="logo" />
            </div>
          );
    }
}
export default Homepage;