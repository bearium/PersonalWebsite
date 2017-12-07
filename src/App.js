import React, { Component } from 'react';
import logo from './logo.svg';
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
        <div style={{display: 'flex', flexDirection: 'row'}}>
            <div style={{width: 220}}>
                <SideNav default='dashboard' highlightBgColor='blue' highlightColor='white'>
                    <Nav id='dashboard'>
                        <NavText>  Dashboard </NavText>
                    </Nav>
                    <Nav id='sales'>
                        <NavText> Sales </NavText>
                        <Nav id='list'>
                            <NavText> List Sales </NavText>
                        </Nav>
                    </Nav>
                    <Nav id='products'>
                        <NavText>  Products </NavText>
                    </Nav>
                </SideNav>
            </div>
            <div style={{padding: 20}}>
                <Route exact path="/" render={a1}/>
                <Route path="/sales" render={a2}/>
                <Route path="/products" render={a1}/>
            </div>
        </div>
    </Router>
);



class App extends Component {



  render() {
    return (

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
        </p>
          {MySideNav}

      </div>
    );
  }
}

export default App;
