import React from 'react';
import { shallow} from 'enzyme';
import { Dashboard } from './dashboard';

describe('<Dashboard />', () => {
  it('Renders without crashing', () => {
    shallow(<Dashboard loggedIn={true} />);
  });
  
  it('Renders the dashboard when user is logged in', () => {
    const wrapper = shallow(<Dashboard />);
    expect(wrapper.find('Link').length).toBe(2);
  });

  it('Redirects to rentals page if user is logged in', () => {
    const wrapper = shallow(<Dashboard loggedIn />);
    expect(wrapper.find('Redirect').length).toBe(1);
  });
});