import React, { Component } from 'react';
import "./me.css"
import pic from "./me.jpg"

class Me extends Component {
    render() {
        return (

            <div>
                <img className="me" src={pic} alt="avatar"></img>

                <p>this is adsd me</p>


            </div>
        );
    }
}



export default Me