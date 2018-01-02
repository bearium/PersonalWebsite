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
                <table>
                    <tbody>
                    <tr>
                        <td>
                            <div className="column1">
                                <div className="box">
                                    <div className="content">
                                        <div className='image fit'>
                                          <img src = {ryke} alt/>
                                        </div>
                                        <header className="align-center">
                                            <p>Software name</p>
                                            <h2>Website</h2>
                                        </header>
                                        <p className="align-center"> description.</p>
                                        <footer className="align-center">
                                            <a href="#" className="button alt">visit</a>
                                        </footer>
                                    </div>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div>
                                <div className="box">
                                    <div className="content">
                                        <div className='image fit'>
                                            <img src = {xmas} alt/>
                                        </div>
                                        <header className="align-center">
                                            <p>Software name</p>
                                            <h2>Website</h2>
                                        </header>
                                        <p className="align-center"> description.</p>
                                        <footer className="align-center">
                                            <a href="#" className="button alt">visit</a>
                                        </footer>
                                    </div>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                    <td>
                        <div className="column1">
                            <div className="box">
                                <div className="content">
                                    <div className='image fit'>
                                        <img src = {resume} alt/>
                                    </div>
                                    <header className="align-center">
                                        <p>Software name</p>
                                        <h2>Website</h2>
                                    </header>
                                    <p className="align-center"> description.</p>
                                    <footer className="align-center">
                                        <a href="#" className="button alt">visit</a>
                                    </footer>
                                </div>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div className="column1">
                            <div className="box">
                                <div className="content">
                                    <div className='image fit'>
                                        <img src = {lunar} alt/>
                                    </div>
                                    <header className="align-center">
                                        <p>Software name</p>
                                        <h2>Website</h2>
                                    </header>
                                    <p className="align-center"> description.</p>
                                    <footer className="align-center">
                                        <a href="#" className="button alt">visit</a>
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