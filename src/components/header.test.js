import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import Header from './header';

describe('<Header />', () => {
  it('Renders without crashing', () => {
    shallow(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
  });

  it('Renders the title', () => {
    const title = "Any Title";
    const wrapper = shallow(<Header title={title}/>);
    expect(wrapper.find('h1').length).toBe(1);
    expect(wrapper.contains(<h1>{title}</h1>)).toEqual(true);
  });
});