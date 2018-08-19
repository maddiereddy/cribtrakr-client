import React from 'react';
import {shallow} from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import About from './about';

describe('<About />', () => {
  it('Renders without crashing', () => {
    shallow(
      <MemoryRouter>
        <About />
      </MemoryRouter>
    );
  });
  
  it('Renders the title and description', () => {
    const title = "Title";
    const description = "Description";

    const wrapper = shallow(<About title={title} description={description} />);
    expect(wrapper.contains(<h2>{title}</h2>)).toEqual(true);
    expect(wrapper.contains(<p>{description}</p>)).toEqual(true);
  });
});