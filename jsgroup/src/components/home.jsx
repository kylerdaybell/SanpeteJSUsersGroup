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
                <div className="title text-seafoam">
                    <h1>Our First Meeting.</h1>
                </div>
                <div className="content">
                    <h2>The first meeting of Sanpete.js will take place on april 1st 2020 via Skype. 
                        <br/>we will be covering the following:</h2>
                        <p>Building API's with Express.JS and MySQL</p>                        
                </div>
            </div>

            <div className="post darkgrey text-white">
                <div className="title text-seafoam">
                    <h1>Welcome to the Sanpete Javascript Users Group</h1>
                </div>
                <div className="content">
                    <p>Founded in 2020</p>
                    <h2>The goal of the SJSUG is to provide Javascript programmers 
                        in sanpete county with a valuable community.</h2>
                </div>
                <img className="image" src={group}></img>
            </div>
            </>
          );
    }
}
export default Homepage;