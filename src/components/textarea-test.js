import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import Textarea from './textarea';

describe('<Textarea />', () => {
  it('Renders without crashing', () => {
    shallow(
      <MemoryRouter>
        <Textarea />
      </MemoryRouter>
    );
  });
});