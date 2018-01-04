import React, { Component } from 'react';
import "./projects.css"
import ryke from "./ryke.png"
import xmas from "./xmas.jpg"
import resume from "./resume.png"
import lunar from "./lunar.png"


class Projects extends Component {
    render() {
        return (
            <div className="fade">
                <h1 className="title">Please checkout some of my past projects</h1>
                <table >
                    <tbody>
                    <tr>
                        <td className="table">
                            <div className="column1">
                                <div className="box">
                                    <div className="content">
                                        <h2 className="align-center">Ryke</h2>
                                        <div className='image fit'>
                                          <img src = {ryke} alt="avatar"/>
                                        </div>
                                        <p className="align-center">Allows students to explore the campus in 3d using a leap motion controller.</p>
                                        <footer className="align-center">
                                            <a href="https://ryke.xyz" className="button alt">visit</a>
                                        </footer>
                                    </div>
                                </div>
                            </div>
                        </td>
                        <td className="table">
                            <div>
                                <div className="box">
                                    <div className="content">
                                        <header className="align-center">
                                        <h2 className="align-center">Christmas Spirit</h2>
                                        </header>
                                        <div className='image fit'>
                                            <img src = {xmas}  alt="avatar"/>
                                        </div>

                                        <p className="align-center">Allows photo manipulation and allows users to place hats on uploaded pictures.</p>
                                        <footer className="align-center">
                                            <a href="https://mlh.ryke.xyz" className="button alt">visit</a>
                                        </footer>
                                    </div>
                                </div>
                            </div>
                        </td>
                        <td className="table">
                            <div className="column1">
                                <div className="box">
                                    <div className="content">
                                        <h2 className="align-center">Lunar Storage</h2>
                                        <div className='image fit'>
                                            <img src = {lunar} alt="avatar"/>
                                        </div>
                                        <p className="align-center">A stocking management system with expiring items and limited storage.</p>
                                        <footer className="align-center">
                                            <a href="http://wecameforthefood.me" className="button alt">visit</a>
                                        </footer>
                                    </div>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td/>
                    <td>
                        <div className="column1">
                            <div className="box">
                                <div className="content">
                                    <h2 className="align-center">IMMM</h2>
                                    <div className='image fit'>
                                        <img src = {resume}  alt="avatar"/>
                                    </div>
                                    <p className="align-center">Resume system that allows search for candidate based on a specific set of guidelines</p>
                                    <footer className="align-center">
                                        <a href="https://hack.ryke.xyz/" className="button alt">visit</a>
                                    </footer>
                                </div>
                            </div>
                        </div>
                    </td>

                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}



export default Projects