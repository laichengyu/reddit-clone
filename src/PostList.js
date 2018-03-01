import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap'
import Post from './Post';
import initData from './data.json';

class PostList extends Component {
	state = {
		posts: initData
	};

  render() {
  	const { posts } = this.state;
    
    return (
    	<div className="PostList">
    		<ListGroup>
  			{
  				posts.sort((a,b) => b.upvotes - a.upvotes)
  				.map(post => <ListGroupItem key={post.id} bsClass='noborder'><Post {...post} /></ListGroupItem>)
  			}
    		</ListGroup>
    	</div>
    );
  }
}

export default PostList;
