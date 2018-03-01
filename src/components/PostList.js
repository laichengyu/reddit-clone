import React, { Component } from 'react';
import './PostList.css';
import { ListGroup, ListGroupItem, Form, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap'
import Post from './Post';
import initData from '../data/data.json';

class PostList extends Component {
	state = {
		posts: initData
	};

  handleSubmit(e) {
		e.preventDefault();
		const { posts } = this.state;
		posts.push({
				id: posts.length+1,
				topic: this.textInput.value,
				upvotes: 0,
				downvotes: 0
		})
		this.setState({
			posts: posts
		})
		this.clearFormInput();
	}

	clearFormInput() {
		this.textInput.value = "";
	}

	handleChange(e) {
		if (this.textInput.value.length <= 255) {
			this.textInput.value = e.target.value;
		} else {
			this.textInput.value = e.target.value.slice(0, 255);
		}
	}

  render() {
  	const { posts } = this.state;
  	let active = 20;

    return (
    	<div className="PostList">
    	  <Form inline onSubmit={this.handleSubmit.bind(this)}>
				  <FormGroup controlId="formInlineName">
				    <ControlLabel>Add new topic</ControlLabel>{' '}
				    <FormControl inputRef={input => this.textInput = input} onChange={this.handleChange.bind(this)} type="text" placeholder="What's up?" />
				  </FormGroup>
				  <Button type="submit">Submit</Button>
				</Form>
    		<ListGroup>
	  			{
	  				posts.sort((a,b) => b.upvotes - a.upvotes)
	  				.filter((_, index) => index < active)
	  				.map(post => <ListGroupItem key={post.id} bsClass='noborder'>
	  										     <Post {...post} />
	  										 </ListGroupItem>)
	  			}
    		</ListGroup>
    	</div>
    );
  }
}

export default PostList;
