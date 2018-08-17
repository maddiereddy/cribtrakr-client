import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import RegistrationPage from './registration-page';

describe('<RegistrationPage />', () => {
  it('Renders without crashing', () => {
    shallow(
      <MemoryRouter>
        <RegistrationPage />
      </MemoryRouter>
    );
  });
});