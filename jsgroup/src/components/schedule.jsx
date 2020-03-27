import React, { Component } from 'react';
import chart from '../public/images/chart.jpg';

class Schedule extends Component{
    render() {
        return (
            <>


            <div className="post white">
                <div className="title text-seafoam">
                    <h1>Our First Meeting.</h1>
                </div>
                <div className="content text-dark-grey">
                        <h2 className="text-dark-grey">Building API's with Express.JS and MySQL - <span className="text-black">chance young</span></h2>
                        <p>april 1st 2020 at 6:00 pm via Skype. </p>                       
                </div>
                <img className="image" src={chart}></img>
            </div>
            </>
          );
    }
}
export default Schedule;