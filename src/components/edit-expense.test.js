import React from 'react';
import { shallow } from 'enzyme';
import { EditExpense } from './edit-expense';
import { MemoryRouter } from 'react-router-dom';

describe('<EditExpense />', () => {
  it('Renders without crashing', () => {
    shallow(
      <MemoryRouter>
        <EditExpense />
      </MemoryRouter>
    );
  });
});