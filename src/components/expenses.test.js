import React from 'react';
import { shallow } from 'enzyme';
import  Expenses from './expenses';
import {MemoryRouter} from 'react-router-dom';

describe('<Expenses />', () => {
  it('Renders without crashing', () => {
    shallow(
      <MemoryRouter>
        <Expenses />
      </MemoryRouter>
    );
  });
});