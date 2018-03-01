import React, { Component } from 'react';
import './NavBar.css';
import { Navbar, Nav, NavItem, Image } from 'react-bootstrap';
import logo from '../images/reddit.png';

class NavBar extends Component {
  render() {
    return (
  		<Navbar fluid id='NavBar'>
  			<Navbar.Header>
	  				<Image src={logo} responsive/>
  			</Navbar.Header>
  			<Nav>
  				<NavItem className="NavBar-title">
  					<h2>reddit-clone</h2>
  				</NavItem>
  			</Nav>
  		</Navbar>
    );
  }
}

export default NavBar;
