import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { DeleteRentalForm } from './delete-rental-form';

describe('<DeleteRentalForm />', () => {
  it('Renders without crashing', () => {
    const username = 'foo';
    const dispatch = jest.fn();
    shallow(
      <MemoryRouter>
        <DeleteRentalForm username={username} initialValues={dispatch}/>
      </MemoryRouter>
    );
  });
});