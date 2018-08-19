import React from 'react';
import { shallow } from 'enzyme';
import { DeleteExpense } from './delete-expense';
import { MemoryRouter } from 'react-router-dom';

describe('<DeleteExpense />', () => {
  it('Renders without crashing', () => {
    shallow(
      <MemoryRouter>
        <DeleteExpense />
      </MemoryRouter>
    );
  });
});