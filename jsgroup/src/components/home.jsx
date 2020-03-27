import React, { Component } from 'react';
import logo from '../public/images/logo.png';
import group from '../public/images/Group.jpg';
import chart from '../public/images/chart.jpg'

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
                <div className="content text-dark-grey">
                        <h2 className="text-dark-grey">Building API's with Express.JS and MySQL - <span className="text-black">chance young</span></h2>
                        <p>april 1st 2020 at 6:00 pm via Skype. </p>                       
                </div>
                <img className="image" src={chart}></img>
            </div>

            <div className="post darkgrey text-white">
                <div className="title text-seafoam">
                    <h1>Welcome to the Sanpete Javascript Users Group</h1>
                </div>
                <div className="content">
                    <p>Founded in 2020</p>
                    <h2>The goal of the SJSUG is to provide Javascript programmers 
                        in Sanpete County with a valuable community.</h2>
                </div>
                <img className="image" src={group}></img>
            </div>
            </>
          );
    }
}
export default Homepage;