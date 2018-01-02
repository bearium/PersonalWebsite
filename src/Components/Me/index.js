import React, { Component } from 'react';
import "./me.css"
import pic from "./me.jpg"

class Me extends Component {
    render() {
        return (

            <div className="page1">
                <br/>
                <img className="me" src={pic} alt="avatar"/>

                <h1 className="Title">Jacob Martin</h1>
                <p className="Title">Computer Systems Engineering Student sample</p>


            </div>
        );
    }
}



export default Me