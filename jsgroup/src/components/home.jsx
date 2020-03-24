import React, { Component } from 'react';
import logo from '../public/images/logo.png';
import group from '../public/images/Group.jpg'

class Homepage extends Component{
    render() {
        return (
            <>
            <div className="App">
                <img src={logo} className="App-logo" alt="logo" />
            </div>

            <div className="post">
                <div className="title">
                    <h1>Welcome to the Sanpete Javascript Users Group</h1>
                </div>
                <div className="content">
                    <p>Founded in 2020</p>
                    <p>The goal of the SJSUG is to provide Javascript programmers 
                        in sanpete county with a valuable community.</p>
                </div>
                <img className="image" src={group}></img>
            </div>
            </>
          );
    }
}
export default Homepage;