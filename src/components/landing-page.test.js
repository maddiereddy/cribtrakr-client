import React from 'react';
import { shallow} from 'enzyme';
import { LandingPage } from './landing-page';
import About from './about';
import LoginForm from './login-form';

describe('<LandingPage />', () => {
  it('Renders without crashing', () => {
    const handleSubmit = jest.fn();
    shallow(<LandingPage handleSubmit={handleSubmit} />);
  });
  
  it('Renders the landing page when user is not logged in', () => {
    const wrapper = shallow(<LandingPage loggedIn={false} />);
    expect(wrapper.find(About).length).toBe(3);
    expect(wrapper.find(LoginForm).length).toBe(1);
  });

  it('Redirects to dashboard if user is logged in', () => {
    const wrapper = shallow(<LandingPage loggedIn />);
    expect(wrapper.find('Redirect').length).toBe(1);
  });
});