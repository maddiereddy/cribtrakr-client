import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import RequiresLogin from './requires-login';

describe('<RequiresLogin />', () => {
  it('Renders without crashing', () => {
    shallow(
      <MemoryRouter>
        <RequiresLogin />
      </MemoryRouter>
    );
  });
});