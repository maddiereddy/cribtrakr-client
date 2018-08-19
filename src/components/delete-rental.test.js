import React from 'react';
import { shallow } from 'enzyme';
import { DeleteRental } from './delete-rental';
import { MemoryRouter } from 'react-router-dom';

describe('<DeleteRental />', () => {
  it('Renders without crashing', () => {
    shallow(
      <MemoryRouter>
        <DeleteRental />
      </MemoryRouter>
    );
  });
});