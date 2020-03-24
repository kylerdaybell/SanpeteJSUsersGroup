import React, { Component } from 'react';
import logo from '../logo.png';
import '../App.css';
import Navbar from './navbar'


class Homepage extends Component{
    render() {
        return (
            <div className="App">
              <Navbar />
                <img src={logo} className="App-logo" alt="logo" />
            </div>
          );
    }
}
export default Homepage;