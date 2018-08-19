import React from 'react';
import { shallow} from 'enzyme';
import { Nav } from './nav';

describe('<Nav />', () => {
  it('Renders without crashing', () => {
    shallow(<Nav />);
  });
  
  it('Renders Link when user is logged in', () => {
    const wrapper = shallow(<Nav loggedIn={true}/>);
    expect(wrapper.find('Link').length).toBe(3);
  });

  it('Renders Link when user is not logged in', () => {
    const wrapper = shallow(<Nav loggedIn={false}/>);
    expect(wrapper.find('Link').length).toBe(1);
  });

  it('Redirects to rentals page if user is logged in', () => {
    const wrapper = shallow(<Nav loggedIn={true} />);
    expect(wrapper.find('a').length).toBe(4);
  });

  it('Redirects to rentals page if user is not logged in', () => {
    const wrapper = shallow(<Nav loggedIn={false} />);
    expect(wrapper.find('a').length).toBe(4);
  });
});