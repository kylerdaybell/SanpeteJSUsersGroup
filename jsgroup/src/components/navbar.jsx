import React, { Component } from 'react';
class Navbar extends Component {
    render() {
      return (
        <div className="nav">
          <ul>
            <li><a className="active" href="#">Home</a></li>
            <li><a href="#news">News</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#about">About</a></li>
        </ul>
        </div>
      );
    }
  }

export default Navbar;