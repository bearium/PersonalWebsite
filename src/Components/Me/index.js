import React, { Component } from 'react';
import "./me.css"
import pic from "./me.jpg"

class Me extends Component {
    render() {
        return (

            <div className="page1">
                <br/>
                <img className="me" src={pic} alt="avatar"/>

                <h1>Jacob Martin</h1>
                <p>Computer Systems Engineering Student</p>
                <p> Hello, my name is Jacob. I am a 3rd year computer systems engineering student at Carleton University. I am a highly motivated
                    student. I have a thorough understanding of data structures and algorithms, and web development. I enjoy being challenged and seeking opportunities
                    to expand my knowledge and show off my skills. I have experience in multiple software languages. I have participated in multiple hackathons across Ottawa, my team and I
                    won several of these hackathons with our programs. Please explore the site to see a few of our designs.
                    This website was designed and coded entirely by me. I hope this site gives you a good understanding of my abilities and knowledge. </p>

                <a href="https://www.linkedin.com/in/jacob-martin-6b4063135/" rel="nofollow" target="_blank">
                    <img src="https://www.dsgfs.com/wp-content/uploads/2014/11/LinkedIn-View-Button.png" alt="LinkedIn Add to Profile button"/>
                </a>
                <br/>
                <a href="https://github.com/bearium" rel="nofollow" target="_blank">
                    <img className="git" src="http://blog.davidecoppola.com/wp-content/uploads/2016/11/GitHub-logo-header.png" alt="LinkedIn Add to Profile button"/>
                </a>


            </div>
        );
    }
}



export default Me