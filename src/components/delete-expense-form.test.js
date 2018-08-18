import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { DeleteExpenseForm } from './delete-expense-form';

describe('<DeleteExpenseForm />', () => {
  it('Renders without crashing', () => {
    const username = 'foo';
    const dispatch = jest.fn();
    shallow(
      <MemoryRouter>
        <DeleteExpenseForm username={username} initialValues={dispatch}/>
      </MemoryRouter>
    );
  });
});