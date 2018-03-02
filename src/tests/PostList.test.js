import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import React from 'react';
import PostList from '../components/PostList.js';
import Post from '../components/Post.js';
import excessData from '../data/excessData.json';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<PostList />', () => {
	it('renders at most twenty posts', () => {
		const items = excessData;
		const wrapper = shallow(<PostList />);
		wrapper.setState({posts: items});
    expect(wrapper.find(Post)).to.have.length.at.most(20);
	});

	it('simulates new post submission', () => {
		const wrapper = mount(<PostList />);
		const instance = wrapper.instance();
		const submitSpy = sinon.spy(instance, 'handleSubmit');
		
		instance.forceUpdate();
		wrapper.update();

		const initialLength = wrapper.find(Post).length;
		sinon.assert.notCalled(submitSpy);
		wrapper.find('#submitButton').hostNodes().simulate('submit', { preventDefault: () => {} });
		sinon.assert.calledOnce(submitSpy);
		expect(wrapper.find(Post)).to.have.length(initialLength+1);
		wrapper.unmount();
	});
});
