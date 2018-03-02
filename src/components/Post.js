import React, { Component } from 'react';
import './Post.css';
import { Panel, Glyphicon, Button, ButtonGroup, Label } from 'react-bootstrap';

class Post extends Component {
	state = {
		id: this.props.id,
		topic: this.props.topic,
		upvotes: this.props.upvotes,
		downvotes: this.props.downvotes
	}

	handleUpvote = () => {
		this.setState({
			upvotes: this.state.upvotes+1
		})
	}

	handleDownvote = () => {
		this.setState({
			downvotes: this.state.downvotes+1
		})
	}

  render() {
  	const { topic, upvotes, downvotes } = this.state;

    return (
    	<div className="Post">
  			<Panel>
  				<Panel.Body>
  					<ButtonGroup vertical>
	  					<Button onClick={this.handleUpvote} id="Post-upvoteButton">
	  						<Glyphicon glyph="chevron-up" />
	  					</Button>
	  					<Button onClick={this.handleDownvote} id="Post-downvoteButton">
	  						<Glyphicon glyph="chevron-down" />
	  					</Button>
  					</ButtonGroup>
  					<div className="Post-votes">
		  				<Label bsStyle="success">Upvotes: {upvotes}</Label>
		  				<Label bsStyle="danger">Downvotes: {downvotes}</Label>
	  				</div>
	  				<span>{topic}</span>
  				</Panel.Body>
  			</Panel>
    	</div>
    );
  }
}

export default Post;
