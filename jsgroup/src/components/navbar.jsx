import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
class Navbar extends Component {
    render() {
      return (
        <div className="nav">
          <ul>
            <li><NavLink className="home" to="/">Sanpete.js</NavLink></li>
            <li><NavLink to="/schedule">Schedule</NavLink></li>
            <li><NavLink to="/tutorials">tutorials</NavLink></li>
          </ul>
        </div>
      );
    }
  }

export default Navbar;