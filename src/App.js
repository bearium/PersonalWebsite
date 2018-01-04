import React, { Component } from 'react';

import './App.css';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import { Nav, NavIcon, NavText, withRR4 } from 'react-sidenav';
import SvgIcon from 'react-icons-kit';
import { user } from 'react-icons-kit/icomoon/user';
import Projects from './Components/Projects'
import Me from './Components/Me'
import Resume from './Components/Resume'

import { keyboard } from 'react-icons-kit/icomoon/keyboard';


const me =() =>(
    <Me/>
);

const projects =() =>(
    <Projects/>
);

const resume =() =>(
    <Resume/>
);

const notFound =() =>(
    <div>
        404!Page Not Found <Link to = "/">Go To DashBoard</Link>
    </div>
);


const SideNav = withRR4();

class App extends Component {
    render() {
        return (<Router>
            <div className="wrapper">
                <div style={{background: '#222222', color: '#FFF', width: 200}}>
                    <header>Navigation</header>
                    <div style={{padding: 5}}>
                    </div>
                    <SideNav highlightColor='#E91E63' highlightBgColor='#00bcd4' defaultSelected='Dashboard'>

                        <Nav id='Me'>
                            <NavIcon><SvgIcon size={20} icon={user}/></NavIcon>
                            <NavText> Me </NavText>
                            <Nav id='resume'>
                                <NavText> Resume </NavText>
                            </Nav>
                        </Nav>
                        <Nav id='Projects'>
                            <NavIcon><SvgIcon size={20} icon={keyboard}/></NavIcon>
                            <NavText>  Projects </NavText>
                        </Nav>
                    </SideNav>
                </div>
                <Switch>
                    <Route exact path="/" render={me} />
                    <Route exact path="/Me" render={me} />
                    <Route path="/Me/Me/resume" render={resume} />
                    <Route path="/Projects" render={projects} />
                    <Route component={notFound} />
                </Switch>
            </div>
        </Router>);
    }
}

export default App;
