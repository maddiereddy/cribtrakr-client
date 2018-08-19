import React from 'react';
import { shallow } from 'enzyme';
import { EditRental } from './edit-rental';
import { MemoryRouter } from 'react-router-dom';

describe('<EditRental />', () => {
  it('Renders without crashing', () => {
    shallow(
      <MemoryRouter>
        <EditRental />
      </MemoryRouter>
    );
  });
});