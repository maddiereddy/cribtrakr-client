import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { EditRentalForm } from './edit-rental-form';

describe('<EditRentalForm />', () => {
  it('Renders without crashing', () => {
    const username = 'foo';
    const dispatch = jest.fn();
    shallow(
      <MemoryRouter>
        <EditRentalForm username={username} initialValues={dispatch}/>
      </MemoryRouter>
    );
  });
});