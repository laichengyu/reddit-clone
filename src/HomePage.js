import React, { Component } from 'react';
import './HomePage.css';

import NavBar from './NavBar';
import Post from './Post';

class HomePage extends Component {
  render() {
    return (
    	<div className="HomePage">
    		<NavBar />
    	</div>
    );
  }
}

export default HomePage;
