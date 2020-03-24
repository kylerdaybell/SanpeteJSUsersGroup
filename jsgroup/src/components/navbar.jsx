import React, { Component } from 'react';
import singlelinelogo from '../public/images/Single-Line-Logo.png'
class Navbar extends Component {
    render() {
      return (
        <div className="nav">
          <ul>
            <li><a className="home" href="#">Sanpete.js</a></li>
            <li><a href="#news">News</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#about">About</a></li>
        </ul>
        </div>
      );
    }
  }

export default Navbar;