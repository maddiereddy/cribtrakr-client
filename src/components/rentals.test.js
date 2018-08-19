import React from 'react';
import { shallow } from 'enzyme';
import  Rentals from './rentals';
import {MemoryRouter} from 'react-router-dom';

describe('<Rentals />', () => {
  it('Renders without crashing', () => {
    shallow(
      <MemoryRouter>
        <Rentals />
      </MemoryRouter>
    );
  });
});