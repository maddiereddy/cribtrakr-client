import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { EditExpenseForm } from './edit-expense-form';

describe('<EditExpenseForm />', () => {
  it('Renders without crashing', () => {
    const username = 'foo';
    const dispatch = jest.fn();
    shallow(
      <MemoryRouter>
        <EditExpenseForm username={username} initialValues={dispatch}/>
      </MemoryRouter>
    );
  });
});