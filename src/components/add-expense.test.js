import React from 'react';
import { shallow } from 'enzyme';
import { AddExpense } from './add-expense';
import { AddExpenseForm } from './add-expense-form';
import { MemoryRouter } from 'react-router-dom';

describe('<AddExpense />', () => {
  it('Renders without crashing', () => {
    shallow(
      <MemoryRouter>
        <AddExpense />
      </MemoryRouter>
    );
  });
  it('Renders the Header and AddExpenseForm components', () => {
    const dispatch = jest.fn();
    const wrapper = shallow(<AddExpense dispatch={dispatch}/>);
    expect(wrapper.find('Header').length).toBe(1);
    expect(wrapper.find(AddExpenseForm).length).toBe(1);
  });
});