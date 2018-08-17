import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import Footer from './footer';
import { Link } from 'react-router-dom';

describe('<Footer />', () => {
  it('Renders without crashing', () => {
    shallow(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );
  });

  it('Renders an icon link', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find(Link).length).toBe(3);
    expect(wrapper.find('span').length).toBe(2);
  });
});