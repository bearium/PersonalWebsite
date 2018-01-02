import React, { Component } from 'react';
import "./resume.css"



class Resume extends Component {
    render() {
        return (
            <div className="fade">

                <iframe className="iframe" src="https://docs.google.com/document/d/e/2PACX-1vTpugFE9YkEzggDu4tt6ULlfaMjAvLUwfLLg9fT28Y0LalJQHt4Yoo_KY3XbfX_HeIQAvKXop0fIN4v/pub?embedded=true"/>

                <a href="https://docs.google.com/document/d/1cTk2HiW4WGoAdWc-ifLq-zeQRZjKmPvqJ-WjvGegp4g/export?format=pdf" rel="nofollow" target="_blank">
                    <img className="dl" src="http://www.ashsimons.com/wp-content/uploads/2016/04/download-button.png" alt="LinkedIn Add to Profile button"/>
                </a>
                </div>



        );
    }
}

export default Resume