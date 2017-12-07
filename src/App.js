import React, { Component } from 'react';

import './App.css';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import { Nav, NavIcon, NavText,withRR4 } from 'react-sidenav';
import SvgIcon from 'react-icons-kit';
import { ic_aspect_ratio } from 'react-icons-kit/md/ic_aspect_ratio';
import { ic_business } from 'react-icons-kit/md/ic_business';


const a1 =() =>(
    <div> hi</div>
);

const a2 =() =>(
    <div> hi yo</div>
);

const notFound =() =>(
    <div>
        404!Page Not Found <Link to = "/">Go To DashBoard</Link>
    </div>
);


const SideNav = withRR4();

export const MySideNav = (
    <Router>
        <div style={{background: '#2c3e50', color: '#FFF', width: 220}}>
            <header>Navigation</header>
            <div style={{padding: 5}}>
            </div>
            <SideNav highlightColor='#E91E63' highlightBgColor='#00bcd4' defaultSelected='Dashboard'>
                    <Nav id='dashboard'>
                        <NavIcon><SvgIcon size={20} icon={ic_aspect_ratio}/></NavIcon>
                        <NavText>  Dashboard </NavText>
                    </Nav>
                    <Nav id='Me'>
                        <NavText> Me </NavText>
                        <Nav id='About Me'>
                            <NavText> About Me </NavText>
                        </Nav>
                        <Nav id='Contact Me'>
                            <NavText> Contact Me </NavText>
                        </Nav>
                    </Nav>
                    <Nav id='Projects'>
                        <NavText>  Projects </NavText>
                    </Nav>
                </SideNav>


        </div>
    </Router>
);

const routes = (
    <Router>
        <Switch>
            <Route exact path="/DashBoard" render={a1}/>
            <Route exact path="/Me" render={a1}/>
            <Route path="About Me" render={a2}/>
            <Route path="/Contact Me" render={a1}/>
            <Route path="/Projects" render={a1}/>
            <Route component={notFound}/>
        </Switch>
    </Router>

);

class App extends Component {



  render() {
    return (

      <div >
        <header >
          <h1 className="App-title">Welcome to my website</h1>
        </header>
          {MySideNav}
          {routes}
      </div>
    );
  }
}

export default App;
