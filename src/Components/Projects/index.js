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
                                        <h2 className="align-center">Website</h2>
                                        <div className='image fit'>
                                          <img src = {ryke} alt/>
                                        </div>
                                        <header className="align-center">
                                            <p>Software name</p>
                                        </header>
                                        <p className="align-center"> description.</p>
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
                                        <h2 className="align-center">Website</h2>
                                        </header>
                                        <div className='image fit'>
                                            <img src = {xmas} alt/>
                                        </div>
                                        <header className="align-center">
                                            <p>Software name</p>
                                        </header>
                                        <p className="align-center"> description.</p>
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
                                        <h2 className="align-center">Website</h2>
                                        <div className='image fit'>
                                            <img src = {lunar} alt/>
                                        </div>
                                        <header className="align-center">
                                            <p>Software name</p>
                                        </header>
                                        <p className="align-center"> description.</p>
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
                    <td className="table">
                        <div className="column1">
                            <div className="box">
                                <div className="content">
                                    <h2 className="align-center">Website</h2>
                                    <div className='image fit'>
                                        <img src = {resume} alt/>
                                    </div>
                                    <header className="align-center">
                                        <p>Software name</p>
                                    </header>
                                    <p className="align-center"> description.</p>
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