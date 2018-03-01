import React, { Component } from 'react';

import NavBar from './NavBar';
import PostList from './PostList';

class HomePage extends Component {
  render() {
    return (
    	<div className="HomePage">
    		<NavBar />
    		<PostList />
    	</div>
    );
  }
}

export default HomePage;
