import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import React from 'react';
import Post from '../components/Post.js';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<Post />', () => {
	it('allows us to set props', () => {
    const wrapper = mount(<Post id={1} topic="Hello!" upvotes={123} downvotes={50} />);
    expect(wrapper.props().id).to.equal(1);
    expect(wrapper.props().topic).to.equal('Hello!');
    expect(wrapper.props().upvotes).to.equal(123);
    expect(wrapper.props().downvotes).to.equal(50);
    wrapper.setProps({ id: 2 });
    expect(wrapper.props().id).to.equal(2);
    wrapper.setProps({ topic: 'Bye!' });
    expect(wrapper.props().topic).to.equal('Bye!');
    wrapper.setProps({ upvotes: 124 });
    expect(wrapper.props().upvotes).to.equal(124);
    wrapper.setProps({ downvotes: 51 });
    expect(wrapper.props().downvotes).to.equal(51);
    wrapper.unmount();
  });

	it('simulates upvoting', () => {
		const wrapper = shallow(<Post id={1} topic="Hello!" upvotes={123} downvotes={50} />);
		const instance = wrapper.instance();
		const upvoteSpy = sinon.spy(instance, 'handleUpvote');
		
		instance.forceUpdate();
		wrapper.update();

		sinon.assert.notCalled(upvoteSpy);
		wrapper.find('#Post-upvoteButton').simulate('click');
		sinon.assert.calledOnce(upvoteSpy);
		expect(wrapper.state().upvotes).to.equal(124);
		wrapper.unmount();
	});

	it('simulates downvoting', () => {
		const wrapper = shallow(<Post id={1} topic="Hello!" upvotes={123} downvotes={50} />);
		const instance = wrapper.instance();
		const downvoteSpy = sinon.spy(instance, 'handleDownvote');
		
		instance.forceUpdate();
		wrapper.update();

		sinon.assert.notCalled(downvoteSpy);
		wrapper.find('#Post-downvoteButton').simulate('click');
		sinon.assert.calledOnce(downvoteSpy);
		expect(wrapper.state().downvotes).to.equal(51);
		wrapper.unmount();
	});
});
