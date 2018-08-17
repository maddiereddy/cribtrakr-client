import React from 'react';
import {shallow} from 'enzyme';
import {Route} from 'react-router-dom';
import {App} from './app';
import Nav from './nav';
import Footer from './footer';

describe('<App />', () => {
  it('Renders without crashing', () => {
    shallow(<App />);
  });
  it('Renders routes', () => {
    const wrapper = shallow(<App loggedIn hasAuthToken />);
    expect(wrapper.find(Route).length).toBe(12);
    expect(wrapper.find(Nav).length).toBe(1);
    expect(wrapper.find(Footer).length).toBe(1);
  });
});