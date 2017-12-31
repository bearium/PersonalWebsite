import React, { Component } from 'react';

import './App.css';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import { Nav, NavIcon, NavText,withRR4 } from 'react-sidenav';
import SvgIcon from 'react-icons-kit';
import { ic_aspect_ratio } from 'react-icons-kit/md/ic_aspect_ratio';
import { user } from 'react-icons-kit/icomoon/user';
import Projects from './Components/Projects'
import Me from './Components/Me'
import { keyboard } from 'react-icons-kit/icomoon/keyboard';


const me =() =>(
    <Me></Me>
);

const projects =() =>(
    <Projects></Projects>
);

const a3 =() =>(
    <div> kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk</div>
);

const notFound =() =>(
    <div>
        404!Page Not Found <Link to = "/">Go To DashBoard</Link>
    </div>
);


const SideNav = withRR4();

export const MySideNav = (
    <Router>
        <div style={{background: '#222222', color: '#FFF', width: 220}}>
            <header>Navigation</header>
            <div style={{padding: 5}}>
            </div>
            <SideNav highlightColor='#E91E63' highlightBgColor='#00bcd4' defaultSelected='Dashboard' onItemSelection={ (id, parent) => {}}>
                    <Nav id='dashboard'>
                        <NavIcon><SvgIcon size={20} icon={ic_aspect_ratio}/></NavIcon>
                        <NavText>  Dashboard </NavText>
                    </Nav>
                    <Nav id='Me'>
                        <NavIcon><SvgIcon size={20} icon={user}/></NavIcon>
                        <NavText> Me </NavText>
                        <Nav id='About Me'>
                            <NavText> About Me </NavText>
                        </Nav>
                        <Nav id='Contact Me'>
                            <NavText> Contact Me </NavText>
                        </Nav>
                    </Nav>
                    <Nav id='Projects'>
                        <NavIcon><SvgIcon size={20} icon={keyboard}/></NavIcon>
                        <NavText>  Projects </NavText>
                    </Nav>
                </SideNav>
        </div>
    </Router>
);

const routes = (
    <Router>
        <Switch>
            <Route path="/dashboard" render={a3}/>
            <Route path="/Me" render={me}/>
            <Route path="/Me/Me/About%20Me" render={me}/>
            <Route path="/Me/Me/Contact" render={me}/>
            <Route path="/Projects" render={projects}/>
            <Route component={notFound}/>
        </Switch>
    </Router>

);

class App extends Component {



  render() {
    return (

      <div  className="wrapper">
          {MySideNav}
          {routes}
      </div>

    );
  }
}

export default App;
