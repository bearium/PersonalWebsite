import React, { Component } from 'react';
import "./resume.css"



class Resume extends Component {
    render() {
        return (
            <div className="fade">

                <iframe className="iframe" src="https://docs.google.com/document/d/e/2PACX-1vRCuJHrH_0qZKWwCxbLW1ua0SzangzhpVQYtfneBueRtKKimxPUghzv88GoBC1XJxLwxrJxyh1SKgmE/pub?embedded=true"/>

                <a href="https://docs.google.com/document/d/1LcQ7egzGRPUIAjUGnDYU7xVgExDo9FUbzVNY1OObRcs/export?format=pdf" rel="nofollow" target="_blank">
                    <img className="dl" src="http://www.ashsimons.com/wp-content/uploads/2016/04/download-button.png" alt="LinkedIn Add to Profile button"/>
                </a>
                </div>



        );
    }
}

export default Resume